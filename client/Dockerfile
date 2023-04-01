FROM node:14.17.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:1.20.1
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
