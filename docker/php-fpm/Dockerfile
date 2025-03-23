FROM php:8.2-fpm

WORKDIR /app

# Install essential build tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    build-essential \
    libpng-dev \
    libwebp-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    nano \
    sudo \
    git \
    curl \
    libicu-dev \
    zlib1g-dev \
    libxml2 \
    libxml2-dev \
    libzip-dev \
    libreadline-dev \
    libonig-dev \
    unixodbc-dev \
    apt-transport-https \
    ca-certificates wget \
    gnupg2

# Install extensions
RUN docker-php-ext-install pdo pdo_mysql mysqli zip exif pcntl mbstring
RUN docker-php-ext-configure gd --with-jpeg
RUN docker-php-ext-install gd

# Install nkf
RUN apt-get install nkf -y

RUN apt-get install -y gpgv nodejs npm

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    unixodbc-dev \
    libgss3 \
    libssl-dev

RUN docker-php-ext-enable pdo_mysql mbstring gd zip

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Remove Cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]