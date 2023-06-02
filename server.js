import express from 'express'
import cors from 'cors'
import connectDB from './db/db'
import postRoute from './routes/postRoute'
import { PORT } from './config'
import path from "path";



connectDB()
const app =express()
app.use(cors())
app.use(express.json())
app.use("/api/post",postRoute)

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT,() =>{
console.log(`server is running ${PORT}`);
})
