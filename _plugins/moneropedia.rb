# Copyright (c) 2014-2018, The Monero Project
#
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without modification, are
# permitted provided that the following conditions are met:
#
# 1. Redistributions of source code must retain the above copyright notice, this list of
#    conditions and the following disclaimer.
#
# 2. Redistributions in binary form must reproduce the above copyright notice, this list
#    of conditions and the following disclaimer in the documentation and/or other
#    materials provided with the distribution.
#
# 3. Neither the name of the copyright holder nor the names of its contributors may be
#    used to endorse or promote products derived from this software without specific
#    prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
# EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
# THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
# PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
# STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
# THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

module Jekyll
  module Converters
    class Markdown < Converter
      alias base_converter convert
      @@moneropedia = Hash.new
      @@moneropedia_ordered = Hash.new
      @@language = Array.new
      @@localConfig = Hash.new

      def convert(content)
        # Building language from config
        if @@language.empty?
          @@language = @config["languages"]
          @@language.each do |lang|
            # Each country code has its own hash
            @@moneropedia[lang] = Array.new
            @@moneropedia_ordered[lang] = Hash.new
            @@localConfig[lang] = Hash.new
            @@localConfig[lang] = SafeYAML.load_file(File.join(@config["source"], "/_i18n/", lang + ".yml"))
          end
        end

        # build up index of Moneropedia summaries
        if @@moneropedia["en"].empty?

          # Loop around all languages from _i18n
          @@language.each do |lang|
            # grab all .md files in the Moneropedia folder, ignore index.md
            moneropedia_path = File.join(@config["source"], "/_i18n/", lang, "/resources/moneropedia/*.md")
            files = Dir.glob(moneropedia_path)

            # step through all the files
            files.each do |entry_file|
              entry = { }
              entry = SafeYAML.load_file(entry_file)

              if !entry.empty?
                baseName = File.basename(entry_file, ".*")
                displayName = @@localConfig[lang]["moneropedia"]["entries"][baseName]
                if displayName == nil
                  displayName = @@localConfig["en"]["moneropedia"]["entries"][baseName]
                end
                @@moneropedia[lang].push({ :terms => entry['terms'], :summary => entry['summary'], :file => baseName })
                @@moneropedia_ordered[lang] = @@moneropedia_ordered[lang].merge({ displayName => baseName })
              end

            end
          end
        end

        # Cleaning Moneropedia article from Front Matter & tag
        if content.include? '@moneropedia_article'
          content = content.gsub(/<hr \/>.*—<\/p>\n/mi, "")
          content = content.gsub(/(\@moneropedia_article\n)/i, "")
        end

        # Getting language from tag, and cleaning it
        if content.include? '@lang_tag_'
          if ( content =~ /\@lang_tag_\w{2}-\w{2}/ )
            lang = content[/\@lang_tag_\w{2}-\w{2}/][-5, 5].downcase;
            content = content.gsub(/(\@lang_tag_\w{2}-\w{2}\n)/i, "")
          else
            lang = content[/\@lang_tag_\w{2}/][-2, 2].downcase;
            content = content.gsub(/(\@lang_tag_\w{2}\n)/i, "")
          end

          # Jekyll.logger.warn YAML::dump(@@moneropedia_ordered)
          if content.include? '@moneropedia_index'
            # Moneropedia index, replace with a list of entries
            cur_letter = 'A'
            replace = "<div class='col-md-4 col-sm-6 col-xs-12 moneropedia'>\n<h4 class='text-center'>A</h4>\n"
            @@moneropedia_ordered[lang].sort.map do |entry, link|
              if cur_letter != entry[0]
                replace += "</div>\n<div class='col-md-4 col-sm-6 col-xs-12 moneropedia'>\n<h4 class='text-center'>" + entry[0] + "</h4>\n"
                cur_letter = entry[0]
              end
              # English is default, no country code in the link
              if lang == "en"
                replace += "<a href='/resources/moneropedia/" + link + ".html'>" + entry + "</a><br>\n"
              else
                replace += "<a href='/" + lang + "/resources/moneropedia/" + link + ".html'>" + entry + "</a><br>\n"
              end
            end
            replace += "</div>"
            content = content.gsub(/(\@moneropedia_index)/i, replace)
          end

          # define which suffix could be joined to the term to lookahead for them
          lookahead = "(based|like|form)"
          # replace instances of @term with tooltips of the summary
          # For all non-English pages
          if lang != "en"
            @@moneropedia[lang].each do |entry|
              entry[:terms].each do |term|
                content = content.gsub(/(\@#{term})((?=-#{lookahead})|(?![\w-]))/i) { |match_term| '<a class="info-tooltip" data-tooltip="' + entry[:summary] + '" href="/' + lang + '/resources/moneropedia/' + entry[:file] + '.html" >' + match_term.gsub(/[@-]/, '@' => '', '-' => ' ') + '</a>' }
              end
            end
          end
          # For English and as a default (in case an entry has been forgotten in a non-English moneropedia folder)
          @@moneropedia["en"].each do |entry|
            entry[:terms].each do |term|
              content = content.gsub(/(\@#{term})((?=-#{lookahead})|(?![\w-]))/i) { |match_term| '<a class="info-tooltip" data-tooltip="' + entry[:summary] + '" href="/resources/moneropedia/' + entry[:file] + '.html" >' + match_term.gsub(/[@-]/, '@' => '', '-' => ' ') + '</a>' }
            end
          end
        end

        base_converter(content)
      end
    end
  end
end
