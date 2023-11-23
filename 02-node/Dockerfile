FROM node:16.13.0

ENV PORT=8080

WORKDIR /server

COPY . .
RUN npm i

RUN npm run build

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]
