FROM php:7.4-fpm-alpine
LABEL maintainer "ayanami"

ARG TZ

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer

# =================================================================
# if you need proxy authentication
ENV HTTP_PROXY=http://host:port
ENV HTTPS_PROXY=http://host:port
# no encoding required
ENV HTTP_PROXY_AUTH=basic:*:user:password
# =================================================================

RUN set -eux && \
  apk add --update-cache --no-cache --virtual=.build-dependencies tzdata && \
  cp /usr/share/zoneinfo/${TZ} /etc/localtime && \
  apk add --update-cache npm && \
  docker-php-ext-install bcmath pdo_mysql

# =================================================================
# if you need proxy authentication
# encoding required
ENV HTTP_PROXY=http://user:password@host:port
ENV HTTPS_PROXY=http://user:password@host:port
# =================================================================

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer && \
  composer config -g repos.packagist composer https://packagist.jp && \
  composer global require hirak/prestissimo