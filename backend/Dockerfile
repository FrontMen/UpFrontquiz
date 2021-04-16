FROM node:14 as builder

WORKDIR /home/app

COPY package*.json .
RUN yarn
COPY . .
RUN yarn build
RUN cp src/schema.graphql dist/schema.graphql

FROM node:14

WORKDIR /home/app

COPY package*.json .
RUN yarn --production
COPY --from=builder /home/app/dist .

CMD ["node","main.js"]