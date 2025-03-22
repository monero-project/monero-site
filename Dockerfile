FROM ruby:3.0.1

WORKDIR /srv/jekyll

# Copy Gemfile and install dependencies
COPY Gemfile Gemfile.lock ./

RUN bundle install

# Copy project files
COPY . .

RUN chown 1000:1000 -R /srv/jekyll

# Mount _site as a volume for host access
VOLUME /srv/jekyll/_site

# Expose Jekyll's default port
EXPOSE 4000

# Default is to serve the site @ localhost:4000
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
