# --- build ---------------------------------------------------------------
FROM node:24-alpine AS build
WORKDIR /app

# Coolify (and any other host serving from a domain root) needs base '/',
# unlike the GitHub Pages deploy which lives under /DSweb_redesign.
ARG SITE=https://alcasyds.eu
ARG BASE_PATH=/
ENV SITE=$SITE BASE_PATH=$BASE_PATH

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- serve ---------------------------------------------------------------
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
