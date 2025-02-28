#!/bin/bash

# Debug info
echo "Current user: $(whoami)"
echo "Storage permissions:"
ls -l /var/www/storage
echo "Database permissions:"
ls -l /var/www/database

# Clear and cache Laravel configuration
echo "Clearing and caching configuration..."
php artisan config:clear
php artisan config:cache

# Run migrations to ensure the database is up-to-date, especially for the sessions table
echo "Running database migrations..."
php artisan migrate --force

# Start nginx
echo "Starting nginx..."
nginx &

# Start php-fpm
echo "Starting php-fpm..."
php-fpm
