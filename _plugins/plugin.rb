module Jekyll
  module Multiple
    module Languages
      module Plugin
        VERSION = "1.2.9"
      end
    end
  end
end

module Jekyll
  class Site
    def read_directories(dir = '')
      base = in_source_dir(dir)
      entries = Dir.chdir(base) { filter_entries(Dir.entries('.'), base) }

      read_posts(dir)
      read_drafts(dir) if show_drafts
      posts.sort!
      limit_posts! if limit_posts > 0 # limit the posts if :limit_posts option is set

      entries.each do |f|
        f_abs = in_source_dir(base, f)
        if File.directory?(f_abs)
          f_rel = File.join(dir, f)
          read_directories(f_rel) unless dest.sub(/\/$/, '') == f_abs
        elsif Utils.has_yaml_header?(f_abs)
          page = Page.new(self, source, dir, f)
          pages << page if publisher.publish?(page)
        else
          static_files << StaticFile.new(self, source, dir, f)
        end
      end

      pages.sort_by!(&:name)
    end

    def read_posts(dir)
      posts = read_content(dir, '_posts', Post)

      posts.each do |post|
        aggregate_post_info(post) if publisher.publish?(post)
      end
    end

    def read_content(dir, magic_dir, klass)
      get_entries(dir, magic_dir).map do |entry|
        klass.new(self, source, dir, entry) if klass.valid?(entry)
      end.reject do |entry|
        entry.nil?
      end
    end

    def get_entries(dir, subfolder)
      base = in_source_dir(dir, subfolder)
      return [] unless File.exist?(base)
      entries = Dir.chdir(base) { filter_entries(Dir['**/*'], base) }
      entries.delete_if { |e| File.directory?(in_source_dir(base, e)) }
    end
  end
end


module Jekyll
  @parsedlangs = {}

  def self.langs
    @parsedlangs
  end

  def self.setlangs(l)
    @parsedlangs = l
  end

  class Site
    alias :process_org :process

    def process
      if !self.config['baseurl']
        self.config['baseurl'] = ""
      end
      #Variables
      config['baseurl_root'] = self.config['baseurl']
      baseurl_org = self.config['baseurl']
      languages = self.config['languages']
      exclude_org = self.exclude
      dest_org = self.dest

      #Loop
      self.config['lang'] = self.config['default_lang'] = languages.first
      puts
      puts "Building site for default language: \"#{self.config['lang']}\" to: #{self.dest}"
      process_org
      languages.drop(1).each do |lang|

        # Build site for language lang
        @dest = @dest + "/" + lang
        self.config['baseurl'] = self.config['baseurl'] + "/" + lang
        self.config['lang'] = lang

        # exclude folders or files from beeing copied to all the language folders
        exclude_from_localizations = self.config['exclude_from_localizations'] || []
        @exclude = @exclude + exclude_from_localizations

        puts "Building site for language: \"#{self.config['lang']}\" to: #{self.dest}"
        process_org

        #Reset variables for next language
        @dest = dest_org
        @exclude = exclude_org

        self.config['baseurl'] = baseurl_org
      end
      Jekyll.setlangs({})
      puts 'Build complete'
    end

    alias :read_posts_org :read_posts

    def read_posts(dir)
      if dir == ''
        read_posts("_i18n/#{self.config['lang']}/")
      else
        read_posts_org(dir)
      end
    end

    alias :read_directories_org :read_directories

    def read_directories(dir = '')
      if dir == ''
        dir = "_i18n/#{self.config['lang']}/"
      end

      base = in_source_dir(dir)
      entries = Dir.chdir(base) { filter_entries(Dir.entries('.'), base) }

      read_posts(dir)
      read_drafts(dir) if show_drafts
      posts.sort!
      limit_posts! if limit_posts > 0 # limit the posts if :limit_posts option is set

      entries.each do |f|
        f_abs = in_source_dir(base, f)

        if File.directory?(f_abs)
          f_rel = File.join(dir, f)
          read_directories(f_rel) unless dest.sub(/\/$/, '') == f_abs
        elsif Utils.has_yaml_header?(f_abs) || File.extname(f_abs) == ".md"
          page = Page.new(self, source, dir, f)
          pages << page if publisher.publish?(page)
        else
          static_files << StaticFile.new(self, source, dir, f)
        end
      end

      pages.sort_by!(&:name)
    end
  end

  module Convertible
    def write(dest)
      lang = self.site.config['lang']
      default_lang = self.site.config['default_lang']
      path = destination(dest)
      dest_path = path

      if path.include?('/_i18n/')
        start_index = path.index '_i18n/'

        if self.is_a?(Jekyll::Post)
          end_index = path.index '/posts/'
          dest_path = path[0..start_index-1] + path[(end_index + 1) .. path.length]
        elsif self.is_a?(Jekyll::Page)
          dest_path = path[0..start_index-1] + path[(start_index + 9) .. path.length]
        end
      end

      FileUtils.mkdir_p(File.dirname(dest_path))

      File.open(dest_path, 'wb') do |f|
        f.write(output)
      end
    end
  end

  class Post
    def url
      rel_url = URL.new({
                  :template => template,
                  :placeholders => url_placeholders,
                  :permalink => permalink
              }).to_s

      if rel_url.include?('/_i18n/')
        start_index = rel_url.index '_i18n/'
        end_index = rel_url.index '/posts/'
        rel_url = rel_url[0..start_index-1] + rel_url[(end_index + 1) .. rel_url.length]
      end

      @url ||= rel_url
    end
  end

  class StaticFile
    def write(dest)
      dest_path = destination(dest)

      orig_path = dest_path
      if dest_path.include?('/_i18n/')
        start_index = dest_path.index '_i18n/'
        dest_path = dest_path[0..start_index-1] + dest_path[(start_index + 9) .. dest_path.length]
      end

      # p "#{self.class} #{dest_path}"

      return false if File.exist?(dest_path) and !modified?
      @@mtimes[path] = mtime

      FileUtils.mkdir_p(File.dirname(dest_path))
      FileUtils.rm(dest_path) if File.exist?(dest_path)
      FileUtils.cp(path, dest_path)

      true
    end
  end

  class LocalizeTag < Liquid::Tag

    def initialize(tag_name, key, tokens)
      super
      @key = key.strip
    end

    def render(context)
      if "#{context[@key]}" != "" #Check for page variable
        key = "#{context[@key]}"
      else
        key = @key
      end
      lang = context.registers[:site].config['lang']
      unless Jekyll.langs.has_key?(lang)
        puts "Loading translation from file #{context.registers[:site].source}/_i18n/#{lang}.yml"
        Jekyll.langs[lang] = YAML.load_file("#{context.registers[:site].source}/_i18n/#{lang}.yml")
      end
      translation = Jekyll.langs[lang].access(key) if key.is_a?(String)
      if translation.nil? or translation.empty?
        translation = Jekyll.langs[context.registers[:site].config['default_lang']].access(key)
        puts "Missing i18n key: #{lang}:#{key}"
        puts "Using translation '%s' from default language: %s" %[translation, context.registers[:site].config['default_lang']]
      end
      translation
    end
  end

  module Tags
    class LocalizeInclude < IncludeTag
      def render(context)
        if "#{context[@file]}" != "" #Check for page variable
          file = "#{context[@file]}"
        else
          file = @file
        end

        includes_dir = File.join(context.registers[:site].source, '_i18n/' + context.registers[:site].config['lang'])

        if File.symlink?(includes_dir)
          return "Includes directory '#{includes_dir}' cannot be a symlink"
        end
        if file !~ /^[a-zA-Z0-9_\/\.-]+$/ || file =~ /\.\// || file =~ /\/\./
          return "Include file '#{file}' contains invalid characters or sequences"
        end

        Dir.chdir(includes_dir) do
          choices = Dir['**/*'].reject { |x| File.symlink?(x) }
          if choices.include?(file)
            source = File.read(file)
            partial = Liquid::Template.parse(source)

            context.stack do
              context['include'] = parse_params(context) if @params
              contents = partial.render(context)
              site = context.registers[:site]
              ext = File.extname(file)

              converter = site.converters.find { |c| c.matches(ext) }
              contents = converter.convert(contents) unless converter.nil?

              contents
            end
          else
            "Included file '#{file}' not found in #{includes_dir} directory"
          end
        end
      end
    end
  end
end

unless Hash.method_defined? :access
  class Hash
    def access(path)
      ret = self
      path.split('.').each do |p|
        if p.to_i.to_s == p
          ret = ret[p.to_i]
        else
          ret = ret[p.to_s] || ret[p.to_sym]
        end
        break unless ret
      end
      ret
    end
  end
end

Liquid::Template.register_tag('t', Jekyll::LocalizeTag)
Liquid::Template.register_tag('translate', Jekyll::LocalizeTag)
Liquid::Template.register_tag('tf', Jekyll::Tags::LocalizeInclude)
Liquid::Template.register_tag('translate_file', Jekyll::Tags::LocalizeInclude)