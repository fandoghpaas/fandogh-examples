# How to deploy Wordpress with MySQL using Fandogh-CLI



```bash

# first you need to log in
fandogh login

# then we need to create a MySQL service,
# the following command will start a MySQL server with service name my-database
# without PHPMyAdmin and using some-password as password  
fandogh managed-service deploy mysql 9.4 \
        -c service_name=my-database \ 
        -c phpmyadmin_enabled=false \ 
        -c mysql_root_password=some-password

# Now we have a MySQL server up and running, let's deploy the wordpress

# switch to wordpress directory
cd wordpress/

# init the image
fandogh image init

# let's publish a version of this image
fandogh image publish 

# let's see if image has been built successfully
# you might need to wait a few seconds
fandogh image versions

# Let's deploy our Wordpress image
fandogh service deploy \ 
        -e WORDPRESS_DB_HOST=my-database \
        -e WORDPRESS_DB_USER=root \
        -e WORDPRESS_DB_PASSWORD=some-password \
        -e WORDPRESS_DB_NAME=wp

# with these environment variables Wordpress should be able to create a database and create require tabels

``` 