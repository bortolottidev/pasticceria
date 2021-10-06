ARG TAG=16-alpine

FROM node:${TAG}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci
RUN npm run build

COPY ./dist .

EXPOSE 3000

RUN node -v

CMD ["node", "main.js"]
