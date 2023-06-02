import { JWT_KEY } from "../config";
import User from "../model/User";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'

export const RegisterController = async (req, res) => {
  const {name,email,password} =req.body
    console.log(req.body.username);
    let existUser;
    try {
         existUser = await User.findOne({email})
    } catch (error) {
        console.log(error);
    }

    if (existUser) {
        return res.status(401).json("user is already Exists")
    }

    const hashpassword = await bcrypt.hashSync(password)
    let user = await new User({
    name,
    email,
    password:hashpassword
  });

  try {
    let result = await user.save();
    res.status(201).json(result);

    jwt.sign({ result }, JWT_KEY, { expiresIn: "2h" }, (err, token) => {
      if (err) {
        res.send("Something went wrong");
      }
      res.send(result, token);
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }

};

export const LoginController = async (req, res) => {
  const {email,password} =req.body
let existUser
  try {
     existUser = await User.findOne({ email: email});
  }catch(error){
  console.log(error);
  }
  if (!existUser) {
    return res.status(401).json("user is not singup ")
  }
  const ispasswordCorrect = bcrypt.compareSync(password,existUser.password)
    if (!ispasswordCorrect) {
      return res.status(401).json({message:'user password email unvalid'})
    }
    const token =jwt.sign({id:existUser._id},JWT_KEY,{expiresIn:"2h"})
  return res.status(200).json({message:"successfully login",user:existUser,token})
};
