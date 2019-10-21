FROM node:10-alpine

WORKDIR /workspaces/typescript

# Add needed files
ADD . .

RUN yarn

RUN apk update
RUN apk add git