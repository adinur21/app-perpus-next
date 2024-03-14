FROM node:21.7.1-alpine

WORKDIR /app/perpus

COPY package* .

RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]