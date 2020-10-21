FROM node:latest
COPY package*.json ./
RUN npm install
COPY . .
ARG NODE_ENV=development
ARG PORT=3002
ENV PORT=$PORT
EXPOSE $PORT
CMD ["npm", "start"]

