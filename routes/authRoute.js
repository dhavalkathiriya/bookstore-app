import express from 'express'
import { LoginController, RegisterController } from '../controller/authController'
// import { verifytoken } from '../controller/verifyToken';

const authRoute = express.Router();

authRoute.post("/register",RegisterController)
authRoute.post("/login",LoginController)
// authRoute.post("/user",verifytoken)

export default authRoute