# Monero

Copyright (c) 2014-2015, The Monero Project

## Development Resources

Web: [getmonero.org](http://getmonero.org)  
Mail: [dev@getmonero.org](mailto:dev@getmonero.org)  
IRC: [#monero-dev on Freenode](irc://chat.freenode.net/#monero-dev)

## About this Project

This is the Monero website. Instead of using MediaWiki or similar, we are using Jekyll and hosting the source on github. All site content is in the easy-to-use Markdown format (Kramdown, specifically), so contributors don't need to have any knowledge of HTML or anything else.

## Pages, Formats, and Rules

If you would like to suggest changes you can do so by forking the repository, making changes directly on your fork, and then submitting them as pull requests. If you need help doing so feel free to ask for assistance in #monero-dev on Freenode.

Pages and formats should be based off existing pages to maintain a consistent look-and-feel. The following notes apply to various parts of the site:

- changes made to _layouts, _includes, and home.php will need to use {% t x.x %} translation tags to pull in the YAML tag from _strings_en.yml, as this is required for multi-language support later on
- with the exception of something like blog/index.html (that is required to be a .html file for Jekyll's pagination to work) all pages should be .md files
- since all static content (CSS/JS/images) is hosted in a separate, non-public repository, changes can be suggested via Github issues and we will cross-apply them to that repo, crediting you in the commit message
- SVG should be used in header icons and diagrams, and FontAwesome icons can be used in text
- Moneropedia entries require nothing more than creating the .md file in knowledge-base/moneropedia/, please use the 00-base-00 file as a boilerplate
- To create a CLI screen shot, prefix the text block with {:.cli-code}, and use span elements for the colours; see getting-started/running.md, getting-started/accepting.md, and the account.md Moneropedia entry

## Deployment

Deploying this website requires Jekyll (2.5+) and the following ruby gems: builder, rubysl-rexml

Multiple language support will be added soon.

## License

Copyright (c) 2014-2015, The Monero Project

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
