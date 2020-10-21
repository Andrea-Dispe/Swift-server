FROM node:latest
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80:3002
CMD ["npm", "start"]
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV DB_NAME=zoomapp
ENV POSTGRES_DB=zoomapp
ENV DB_USERNAME=zoomapp
ENV DB_PASSWORD=zoomapp
