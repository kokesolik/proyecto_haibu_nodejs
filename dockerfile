# Stage 1 - the build process
FROM node:16.3.0 as build

# Versions
RUN npm -v
RUN node -v

WORKDIR /app
COPY package.json ./
COPY . .
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.21.5-alpine AS Aplidocke-Productiva
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]