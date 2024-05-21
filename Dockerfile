FROM node:16.14.2-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3003
CMD yarn serve --port 3003