FROM node:latest
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80:3002
CMD ["npm", "start"]