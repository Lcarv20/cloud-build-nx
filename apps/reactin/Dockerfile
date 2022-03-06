FROM node:slim

WORKDIR /app/reactin

COPY dist/apps/reactin .

RUN npm i -g http-server

CMD [ "http-server", "."]