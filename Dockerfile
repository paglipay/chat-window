# Use an official Node runtime as a parent image
FROM node:12.18.3

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV NODE_ENV production

# Run npm run build when the container launches
RUN npm run build

# Command to run the app
CMD ["npm", "start"]