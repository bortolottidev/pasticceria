ARG TAG=16-alpine

# -------> Build phase
FROM node:${TAG} as build

WORKDIR /usr/src/app

COPY . /usr/src/app

ARG BE_HOST
ENV REACT_APP_BE_HOST ${BE_HOST}

RUN yarn install
RUN npm run build

# -------> Run phase
FROM nginx:1.21.3-alpine as run

COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
