import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import socketio from 'socket.io';
import { Server } from 'http';
import cors from 'cors';
import { ExpressPeerServer } from 'peer';
import dotenv from "dotenv";
dotenv.config();

const app = express();

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

import { db } from "./model/db";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context () {
    return { db };
  }
});

server.applyMiddleware({ app });

const expressServer = new Server(app);

const peerServer = ExpressPeerServer(expressServer, {
  path: '/myapp'
});

app.use('/peerjs', peerServer);

const io = socketio(expressServer);

app.use(cors());

const port: number = Number(process.env.PORT || 3002);

(async () => {
  try {
    await db.sequelize.sync(); //{force: true} if columns are added
    console.log('DB is connected 👍');
    expressServer.listen(port, ()=> {
      console.log(`Server ready at http://localhost:${port}👍`)
      })
    } catch (error) {
    console.error('Error connecting to the db', error);
  }
})();

io.on('connection', socket => {
  console.log('connected')
  socket.on('join-room', (roomId, userId, peerId) => {
    console.log(roomId, userId)
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId, peerId)
​
    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})
