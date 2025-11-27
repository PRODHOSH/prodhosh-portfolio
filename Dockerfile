# ================================
# 🚀 PRODHOSH PORTFOLIO - DOCKERFILE
# ================================

# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy static export
COPY --from=builder /app/out ./out

# Install serve to host static files
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "out", "-p", "3000"]
