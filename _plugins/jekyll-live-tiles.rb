# Jekyll plugin for generating Windows 8.1 start screen live tiles
#
# Usage: place this file in the _plugins directory and set the required configuration
#        attributes in the _config.yml file
#
# Uses the following attributes in _config.yml:
#   ie_category:   - (optional) poll only a specific category of posts
#   ie_frequency:  - (optional) the frequency of site polling. Options are {30,60,360,720,1440}. Default is 1440 (1 day) 
#   ie_tile_color: - (optional) the color of the windows 8 pinned background tile
#   ie_tile_small: - location of small tile image (For more information of tile sizes visit http://msdn.microsoft.com/en-us/library/dn455106(v=vs.85).aspx)
#   ie_tile_medium - location of medium tile image
#   ie_tile_wide   - location of wide tile image
#   ie_tile_large  - location of large tile image

#
# Author: Matt Sheehan <sheehamj@mountunion.edu>
# Site: http://mattsheehan.me
# Source: http://github.com/
#
# Distributed under the MIT license
# Copyright Matt Sheehan 2014


module Jekyll

  class TileTemplater < Generator
    priority :low
    safe true

    # Entry method
    def generate(site)
      # create tile config file
      site.static_files << TileConfig.new(site, site.source, "/ietemplates/", "ieconfig.xml")

      # create tile poll files
      # create at most 4
      category = site.config["ie_category"]
      posts = !category ? site.posts : site.categories.has_key?(category) ? site.categories[category] : site.posts
      
      count = [posts.docs.length, 4].min

      posts.docs.reverse[0..count].each_with_index do |post, index|
        site.static_files << TilePoll.new(site, site.source, "/ietemplates/", "poll#{index+1}.xml", post)
      end
    end

  end



  # polling xml
  class TilePoll < StaticFile
    def initialize(site, base, dir, name, post)
      super(site, base, dir, name, nil)

      @post = post
    end

    def write(dest)
      # post.render(site.layouts, site.site_payload)

      # Create directory if doesn't exist
      poll_dir = File.join(dest, @dir)
      FileUtils.mkdir_p(poll_dir)


      # Build xml tile templates
      xml = Builder::XmlMarkup.new( :indent => 2)
      xml.instruct! :xml, :encoding => "utf-8"

      xml.tile do |tile|
        tile.visual("lang"=>"en-US", "version"=>"2") do |v|
          v.binding("template"=>"TileSquare150x150Text04", "branding"=>"logo", "fallback"=>"TileSquareImage") do |b|
            b.tag!("text", @post['title'], "id"=>"1")
          end
          v.binding("template"=>"TileWide310x150Text03", "branding"=>"logo", "fallback"=>"TileWideImage") do |b|
            b.tag!("text", @post['title'], "id"=>"1")
          end
          v.binding("template"=>"TileSquare310x310TextList02", "branding"=>"logo", "fallback"=>"TileWideText09") do |b|
            b.tag!("text", @post['title'], "id"=>"1")
            b.tag!("text", shorten(strip(@post.content)),"id"=>"2")
            b.tag!("text", "#{@post.date.month}-#{@post.date.day}-#{@post.date.year}", "id"=>"3")
          end
        end
      end

      poll_path = File.join(poll_dir, @name)
      File.open(poll_path, "w") { |f| f.write(xml.target!) }
    end


    private

    # Shortens string and adds trailing ellipsis
    def shorten(str, count = 30)
      if str.length >= count
        return str[0, count] << "..."
      end
      return str
    end

    # Strips html tags (not the best)
    def strip(string)
      string.gsub(/<[^>]*>/, "")
    end

  end


  # sets ie 11 configs
  class TileConfig < StaticFile; 
    def initialize(site, base, dir, name)
      super(site, base, dir, name)
    end

    def write(dest)
      require 'builder'

      # configs
      tile_color = @site.config["ie_tile_color"] || "#000000"
      tile_small = @site.config["ie_tile_small"]
      tile_medium = @site.config["ie_tile_medium"]
      tile_wide = @site.config["ie_tile_wide"]
      tile_large = @site.config["ie_tile_large"]

      frequency = @site.config["ie_frequency"] || 1440
      raise "frequency must be either 30, 60, 360, 720, 1440" unless [30,60,360,720,1440].include?(frequency)

      # create dir for tile config
      config_dir = File.join(dest, @dir)
      FileUtils.mkdir_p(config_dir)


      # build xml config
      xml = Builder::XmlMarkup.new( :indent=>2)
      xml.instruct! :xml, :encoding=>"utf-8"

      xml.browserconfig do |config|
        config.msapplication do |app|
          app.tile do |tile|
            tile.tag!("square70x70logo", "src"=>"#{tile_small}")
            tile.tag!("square150x150logo", "src"=>"#{tile_medium}")
            tile.tag!("wide310x150logo", "src"=>"#{tile_wide}")
            tile.tag!("square310x310logo", "src"=>"#{tile_large}")
            tile.tag!("TileColor", "#{tile_color}")
          end
          app.notification do |n|
            n.tag!("polling-uri", "src"=>"/ietemplates/poll1.xml")
            n.tag!("polling-uri2", "src"=>"/ietemplates/poll2.xml")
            n.tag!("polling-uri3", "src"=>"/ietemplates/poll3.xml")
            n.tag!("polling-uri4", "src"=>"/ietemplates/poll4.xml")
            n.tag!("polling-uri5", "src"=>"/ietemplates/poll5.xml")
            n.tag!("frequency", "#{frequency}")
            n.tag!("cycle", "1")
          end
        end
      end

      # write file
      config_path = File.join(config_dir, @name)
      File.open(config_path, "w") { |f| f.write(xml.target!) }
    end
   end
end