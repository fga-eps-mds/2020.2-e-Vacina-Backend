FROM node:12.18.4-alpine 

WORKDIR /app

COPY package*json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]