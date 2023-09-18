#FROM node:latest
#
### install simple http server for serving static content
#RUN npm install -g http-server
##
### make the 'app' folder the current working directory
#WORKDIR /app
##
### copy both 'package.json' and 'package-lock.json' (if available)
#COPY . .
##COPY package*.json ./
##
### install project dependencies
#RUN npm install
##
### copy project files and folders to the current working directory (i.e. 'app' folder)
#
##
### build app for production with minification
#RUN npm run build
##
#EXPOSE 80
#CMD [ "http-server", "-p 80", "dist" ]


#FROM node:latest as builder
#
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build
#
## Nginx 이미지를 사용하여 정적 파일을 호스팅
#FROM nginx:latest
#COPY --from=build /app/dist /usr/share/nginx/html
#EXPOSE 80


# Stage 1: Build Vue.js Application
FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#FROM nginx:alpine
#COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

