# Use official Node.js runtime as base image
FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Embed Student ID as an environment variable (replace with yours)
ENV STUDENT_ID=22561504

# Expose app port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
