FROM node:18.16.0-alpine

WORKDIR /app

ENV NODE_ENV="production"
ENV FRONTEND_PREFIX=""
ENV API_URI="/api"

COPY package.json yarn.lock ./
RUN yarn install --prod
COPY babel.config.js next.config.js next-env.d.ts server.js tsconfig.json .eslintrc.js .eslintignore .prettierignore public ./
COPY config ./config
COPY public ./public
COPY src ./src
COPY ./build ./build

CMD node ./server.js
