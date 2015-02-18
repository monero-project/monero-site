# Jekyll plugin for generating Windows 8.1 start screen live tiles
#
# Usage: place this file in the _plugins directory and set the required configuration
#        attributes in the _config.yml file
#
# Uses the following attributes in _config.yml:
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
  class Xml < Page; end

  class TileTemplater < Generator
    priority :low
    safe true

    require 'builder'


    # Entry method
    def generate(site)
      generate_config(site)
      generate_templates(site)
    end


    # Generates ieconfig.xml
    def generate_config(site)

      # Configs
      tile_color = site.config["ie_tile_color"] || "#000000"
      frequency = site.config["ie_frequency"] || 1440
      tile_small = site.config["ie_tile_small"]
      tile_medium = site.config["ie_tile_medium"]
      tile_wide = site.config["ie_tile_wide"]
      tile_large = site.config["ie_tile_large"]

      # Build xml config
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

        # Create file and add to site
        name = "ieconfig.xml"
        dest = File.join(site.source, "/ietemplates/")

        validate_dir(dest)

        File.open("#{dest}#{name}", "w") { |f| f.write(xml.target!) }
        site.pages << Jekyll::Xml.new(site, site.source, "/ietemplates/", name)

    end


    # Generates tile templates
    def generate_templates(site)
      count = [site.posts.count, 4].min

      site.posts.reverse[0..count].each_with_index do |post, index|
        post.render(site.layouts, site.site_payload)

        # Build xml tile templates
        xml = Builder::XmlMarkup.new( :indent => 2)
        xml.instruct! :xml, :encoding => "utf-8"

        xml.tile do |tile|
          tile.visual("lang"=>"en-US", "version"=>"2") do |v|
            v.binding("template"=>"TileSquare150x150Text04", "branding"=>"logo", "fallback"=>"TileSquareImage") do |b|
              b.tag!("text", post.title, "id"=>"1")
            end
            v.binding("template"=>"TileWide310x150Text03", "branding"=>"logo", "fallback"=>"TileWideImage") do |b|
              b.tag!("text", post.title, "id"=>"1")
            end
            v.binding("template"=>"TileSquare310x310TextList02", "branding"=>"logo", "fallback"=>"TileWideText09") do |b|
              b.tag!("text", post.title, "id"=>"1")
              b.tag!("text", shorten(strip(post.content)),"id"=>"2")
              b.tag!("text", "#{post.date.month}-#{post.date.day}-#{post.date.year}", "id"=>"3")
            end
          end
        end

        # Create file and add to site
        name = "poll#{index+1}.xml"
        dest = File.join(site.source, "/ietemplates/")

        validate_dir(dest)

        File.open("#{dest}#{name}", "w") { |f| f.write(xml.target!) }
        site.pages << Jekyll::Xml.new(site, site.source, "/ietemplates/", name)

      end
    end



    private

    # Validates path to make sure there is a leading and trailing slash
    def validate_path(path)
      path[0] == "/" ? path : "/#{path}"
      path[path.length-1] == "/" ? path : "#{path}/"
      return path
    end


    # Validates directory exists, else creates directory
    def validate_dir(dir)
      FileUtils.mkdir_p(dir)
    end


    # Shortens string and adds trailing ellipsis
    def shorten(string, count = 30)
      if string.length >= count
        shortened = string[0, count]
        splitted = shortened.split(/\s/)
        words = splitted.length
        splitted[0, words-1].join(" ") + '...'
      else
        string
      end
    end


    # Strips html tags (not the best)
    def strip(string)
      string.gsub!(/<("[^"]*"|'[^']*'|[^'">])*>/, "")
    end


  end
end