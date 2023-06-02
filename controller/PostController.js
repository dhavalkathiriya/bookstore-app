import Post from "../model/Post"



export const AddPost =async(req,res) => {
    const {title,desc,price,img,author } =req.body
    const product = await new Post({
    title,
    desc,
    price,
    img,
    author
    })
try {
    const data = await product.save()
    res.status(201).json(data)
} catch (error) {
    res.status(401).json({message:error.message})
}
    
}

export const AllPost = async(req,res)=>{
try {
    const all = await Post.find({})
  res.status(201).json(all)
} catch (error) {
    res.status(401).json({message:error.message})
}
} 

export const OnePost = async(req,res)=>{

try {
    const all = await Post.findById(req.params.id)
  res.status(201).json(all)
} catch (error) {
    res.status(401).json({message:error.message})
}
}  


export const UpdatePost =async(req,res) =>{

    const id =req.params.id
    // const {title,desc,author,price,img} =req.body
    try {
        const updatepost = await Post.findByIdAndUpdate(id,req.body,{
        new:true
        })
        res.status(201).json(updatepost);
    } catch (error) {
        res.status(401).json({message:error.message});
        
    }
}

export const DeletePost =async(req,res) =>{
    try {
        const id = req.params.id;

        const deletuser = await Post.findByIdAndRemove({_id:id})
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
}