# Use the Node.js Alpine base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire app to the container
COPY . .

# Build the app for production
RUN npm run build
RUN npm run build:css

# Start the application using serve (you can add it as a dependency)
CMD ["npx", "serve", "-s", "build", "-l", "80"]
