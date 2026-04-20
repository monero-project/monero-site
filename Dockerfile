FROM ruby:3.0.1@sha256:d1a8c5160d98cdd51000d3ebfc75ccdad5f43c4b319bbd9e0212dfc337c1e4b5

WORKDIR /srv/jekyll

COPY Gemfile Gemfile.lock ./

RUN gem install bundler:2.2.23

RUN bundle install --jobs 4 --retry 3

RUN chown 1000:1000 -R /srv/jekyll

# Expose Jekyll's default port
EXPOSE 4000

# Default is to serve the site @ localhost:4000
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
