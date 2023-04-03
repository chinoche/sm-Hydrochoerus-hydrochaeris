# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
#copied the package.json file for vite and ts, so the build step coould be finished
COPY package*.json ./

# Install all dependencies (including development dependencies)
RUN npm ci

# Copy the source code to the working directory
COPY . .

# Build the application
RUN npm run build

# Remove node_modules folder to reduce the image size
RUN rm -rf node_modules

# Use the official Nginx image as the base image for the production server
FROM nginx:stable-alpine

# Copy the build output to Nginx's public folder
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]