# Use a lightweight version of Node.js
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --ignore-scripts

# Copy all source files
COPY . .

# Compile TypeScript to JavaScript
RUN npm run compile

# Specify the command to run on container start
CMD ["node", "build/src/index.js"]
