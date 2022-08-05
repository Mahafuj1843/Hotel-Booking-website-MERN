import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import hotelsRouter from './routes/hotels.js'
import roomsRouter from './routes/rooms.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connect to MongoDB.")
      } catch (error) {
        throw error
      }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected")
})

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/hotels', hotelsRouter);
app.use('/rooms', roomsRouter);

app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something wents wrong."
  return res.status(errorStatus).json({
    success : false,
    status : errorStatus,
    message : errorMessage,
    stack : err.stack,
  });
});

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})
