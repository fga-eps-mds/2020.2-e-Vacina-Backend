FROM node:12.18.4-alpine 

WORKDIR /app

COPY package*json ./
RUN npm install

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]