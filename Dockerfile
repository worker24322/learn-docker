FROM node:20-alpine

RUN echo "Hello Docker!"

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 3000
