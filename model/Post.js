import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
 {
    title: {
        type: String,
        required: true,
      },
    desc: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      author : {
        type: String,
        required: true,
      },
    img: {
        type: String,
        required: true,
      }
},
{timestamps:true}
)

export default mongoose.model("books",postSchema)