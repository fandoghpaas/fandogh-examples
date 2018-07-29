FROM touch4it/yii2-php-fpm-nginx:7.2
WORKDIR /var/www/html
COPY ./code /var/www/html
RUN php composer.phar config --global github-protocols https
RUN php composer.phar install --prefer-dist --no-interaction 
COPY ./code/.htaccess /var/www/html/.htaccess
COPY ./www.conf /usr/local/etc/php-fpm.d/www.conf
RUN chown www-data -R /var/www/html
