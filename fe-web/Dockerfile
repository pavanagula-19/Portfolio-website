# Step 1: Build the frontend
FROM node:20 AS builder
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

COPY . .
RUN pnpm install
RUN pnpm run build

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
