FROM node:erbium-alpine as build-stage
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:alpine as prod-stage
COPY --from=build-stage /usr/app/dist/stock-projection-client /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
