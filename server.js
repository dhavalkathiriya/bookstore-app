import express from 'express'
import cors from 'cors'
import connectDB from './db/db'
import postRoute from './routes/postRoute'
import { PORT } from './config'


connectDB()
const app =express()
app.use(cors())
app.use(express.json())

app.use("/api/post",postRoute)

app.listen(PORT,() =>{
console.log(`server is running ${PORT}`);
})