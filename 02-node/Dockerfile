FROM node:16.13.0

ENV PORT=8080

WORKDIR /usr/src/app/server

COPY . .
RUN npm i

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
