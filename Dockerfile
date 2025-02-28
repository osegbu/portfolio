FROM php:8.4-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    sqlite3 \
    libsqlite3-dev \
    nginx \
    sudo

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_sqlite pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Set working directory
WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Install Composer dependencies
RUN composer install

# Install npm dependencies
RUN npm install
RUN npm rebuild
RUN npm run build

# Create the SQLite database file and set the proper permissions
RUN chown -R www-data:www-data /var/www/database && \
    chmod -R 775 /var/www/database

# Set up SQLite database (optional, if migrations are needed)
# RUN php artisan migrate --force

# Generate application key
RUN php artisan key:generate

# Expose port 8080
EXPOSE 8080

# Copy nginx configuration
COPY nginx.conf /etc/nginx/sites-available/default

# Set some permissions for nginx
RUN chown -R www-data:www-data /var/www/storage
RUN chmod -R 775 /var/www/storage

# Give execute permissions to start.sh
RUN chmod +x /var/www/start.sh

# Give permissions to www-data for sudo commands
RUN echo "www-data ALL=(ALL) NOPASSWD: /usr/sbin/nginx" >> /etc/sudoers.d/www-data

# Start the application
CMD ["/var/www/start.sh"]
