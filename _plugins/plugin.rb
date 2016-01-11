# Just a placeholder plugin to do translated strings, gives us room and scope to get the
# jekyll-multiple-languages-plugin to work correctly

module Jekyll
  module Translated
    module Strings
      module Plugin
        VERSION = "0.1"
      end
    end
  end
end

module Jekyll
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

      site = context.registers[:site]

      stringsfile = File.join(site.source, '_strings_en.yml')

      strings_en = YAML.load_file(stringsfile)

      translation = strings_en.access(key) if key.is_a?(String)
      if translation.nil? || translation.empty?
        Jekyll.logger.abort_with "Missing key: #{key}"
      end
      
      # If we have an @, pass the string through the markdown converter, so that we hit the Moneropedia plugin
      if translation.include? '@'
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        translation = converter.convert(translation)[3..-6]
      end

      translation
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
