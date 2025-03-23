## Installation Docker to build Project
### Build development environment
1. Clone the repository

2. Navigate to the project directory
```
cd [project-name]
```

3. Copy file .env from .env-sample and setup.
```
cp .env-sample .env
```

4. Build the Docker Images: <br>
```
docker-compose build
```

5. Start the containers: <br>
```
docker-compose up -d
```

6. Generate key:<br>
```
php artisan key:generate
```

7. In the first time build source code, you run migrate database and create masterdata: <br>
Manual
```
php artisan migrate --seed
```

8. Add host:<br>
```
127.0.0.1 wakeup.local
```
Access the application Open http://localhost or http://wakeup.local

9. To stop Docker
Manual ```docker-compose down```
