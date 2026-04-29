# ──────────────────────────────────────────────────────────────
# Stage 1: Build React frontend
# ──────────────────────────────────────────────────────────────
FROM node:22-alpine AS frontend-build

WORKDIR /build

COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

COPY index.html vite.config.ts tailwind.config.js postcss.config.js tsconfig.json ./
COPY src/ ./src/
COPY public/ ./public/

RUN npm run build

# ──────────────────────────────────────────────────────────────
# Stage 2: Build Go server (static binary for scratch)
# ──────────────────────────────────────────────────────────────
FROM golang:1.22-alpine AS server-build

WORKDIR /build

COPY server/go.mod ./
RUN go mod download

COPY server/main.go ./
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o server .

# ──────────────────────────────────────────────────────────────
# Stage 3: Final minimal image (scratch)
# ──────────────────────────────────────────────────────────────
FROM scratch

COPY --from=server-build /build/server /app/server
COPY --from=frontend-build /build/dist /app/static

# Create images directory structure
COPY images/ /app/images/

EXPOSE 9090

ENTRYPOINT ["/app/server"]
