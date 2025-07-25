FROM node:18-alpine

# Install bash and dependencies
RUN apk add --no-cache bash git

# Set the working directory
WORKDIR /workspace

# Copy only package files first and install
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the Next.js dev port
EXPOSE 3000

CMD ["npm", "run", "dev"]

