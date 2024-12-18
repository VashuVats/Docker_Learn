FROM node:latest
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 2024
CMD ["npm","run","start"]



