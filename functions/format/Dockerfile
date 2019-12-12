FROM node:10
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY ./node_modules ./node_modules/.
RUN ls -la ./node_modules
COPY ./node_modules/formatter/. ./node_modules/formatter/.
RUN ls ./node_modules/formatter
RUN node app.js
