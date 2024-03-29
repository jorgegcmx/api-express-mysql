# api-express-mysql
api swagger node Express js y MySQL

# Download dependencies
npm install 

# Start Local service
npm run dev 

http://localhost:8080

# Documentation url 
Swagger http://localhost:8080/docs

## Deploy in Docker container

# Create image docker
docker build -t service-express .

# Start container with image
docker run -p 3000:8080 --name express-api-mysql service-express
