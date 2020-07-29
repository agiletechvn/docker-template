ARG NODE_VERSION=current-alpine
FROM node:${NODE_VERSION}

WORKDIR /usr/src/app

ARG APP_VERSION=dev
ARG APP_COMMITID=HEAD

ONBUILD COPY ./package.json /usr/src/app
ONBUILD COPY ./yarn.lock /usr/src/app
ONBUILD RUN yarn
ONBUILD COPY . .
ONBUILD RUN yarn build

CMD [ "yarn", "start" ]