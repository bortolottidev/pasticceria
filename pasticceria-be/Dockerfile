ARG TAG=16-alpine

# -------> Build phase
FROM node:${TAG} as build

ENV NODE_ENV build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i
RUN npm run build

# -------> Run phase
FROM node:${TAG} as run

ENV NODE_ENV production
USER node

WORKDIR /usr/src/app

COPY --chown=node:node package*.json /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/dist /usr/src/app

RUN npm ci --only=production

CMD ["node", "main.js"]