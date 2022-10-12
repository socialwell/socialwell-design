# module install
FROM node:16.17.0-alpine as module-install-stage
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN apk add yarn
RUN yarn install --production
RUN apk add --no-cache python3 py3-pip make g++
RUN yarn add @types/styled-components

# build
FROM node:16.17.0-alpine as build-stage
COPY --from=module-install-stage /node_modules/ /node_modules
# WORKDIR /app
COPY . .
RUN yarn build

# serve
FROM node:16.17.0-alpine
# COPY --from=build-stage /build/ ./
RUN yarn global add serve
# start app
CMD printenv & serve -s ./build -l 6006

