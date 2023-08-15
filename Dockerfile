FROM node:16.20.0

WORKDIR /

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=5137

EXPOSE 5137

CMD ["npm", "start"]