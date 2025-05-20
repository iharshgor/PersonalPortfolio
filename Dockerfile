# Stage 1: Build the client
FROM node:20 AS client-builder
WORKDIR /app

# Copy full project
COPY . .

# Install dependencies
RUN npm install

# Build the Vite frontend
RUN cd client && npm run build


# Stage 2: Build the backend
FROM node:20 AS server-builder
WORKDIR /app

# Copy full project again
COPY . .

# Install and build server
RUN npm install
RUN npm run build


# Stage 3: Final runtime image
FROM node:20-alpine
WORKDIR /app

# Copy server build
COPY --from=server-builder /app/dist ./dist

# Copy built client files
COPY --from=client-builder /app/client/dist ./client/dist

# Copy production deps
COPY package*.json ./
RUN npm install

# Set environment
ENV NODE_ENV=production

# Expose app port
EXPOSE 5000

# Start the server
CMD ["node", "dist/index.js"]
