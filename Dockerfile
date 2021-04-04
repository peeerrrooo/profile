FROM node:14.15.1 as build

ARG FRONTEND_PREFIX=""

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY babel.config.js next.config.js next-env.d.ts server.js tsconfig.json tslint.json ./
COPY config ./config
COPY public ./public
COPY src ./src
RUN FRONTEND_PREFIX=$FRONTEND_PREFIX yarn build

FROM node:14.15.1-alpine

WORKDIR /app

ENV PORT=3333
ENV FRONTEND_PREFIX=""
ENV API_URI="/api"
ENV TELEGRAM_TOKEN=""
ENV TELEGRAM_CHAT_ID=""

COPY package.json yarn.lock ./
RUN yarn install --prod
COPY babel.config.js next.config.js next-env.d.ts server.js tsconfig.json tslint.json ./
COPY config ./config
COPY public ./public
COPY src ./src
COPY --from=build /app/build ./build

CMD PORT=$PORT \
API_URI=$API_URI \
FRONTEND_PREFIX=$FRONTEND_PREFIX \
TELEGRAM_TOKEN=$TELEGRAM_TOKEN \
TELEGRAM_CHAT_ID=$TELEGRAM_CHAT_ID \
yarn start

EXPOSE 3333
