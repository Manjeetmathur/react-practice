import { uploadOnCloudinary } from "../middlewares/multer.js";
import { Like } from "../model/like.js";

import { Posts } from "../model/posts.js"
import { User } from "../model/user.js"

const uploadPost = async (req, res) => {

       const { title, description, category, userId ,link,price,stock} = req.body
       try {
              if(userId === null){
                     throw new Error("Invalid user access ")
              }
              const user = await User.findById(userId);
              // console.log(user);

              if (!user) {
                     throw new Error("Invalid user access");
              }

              if (!title || !description || !category) {
                     throw new Error("All Fields are required")
              }
              
              const postfilePath = req.file?.path

              const postUrl = await uploadOnCloudinary(postfilePath)

              const post = await Posts.create({
                     postTitle: title,
                     postDescription: description,
                     postCategory: category,
                     "postImage.imageUrl": postUrl.secure_url,
                     "postImage.publicId": postUrl.public_id,
                     link:link || "",
                     price : price || "",
                     stock : stock || "",
                     owner: userId 
              })
              return res.status(200).json({
                     message: ("post uploaded successfully"),
                     success: true,
                     data: post
              })
       } catch (error) {
             res.json({
                     message: error.message
              })
       }

}



const getPostinfo = async (req, res) => {
       
       
       const { userId } = req.query;
       try {
              const posts = await Posts.find({ owner: userId });
              
              res.status(200).json({
                     success: true,
                     message: "users posts get successfully",
                     data: posts,
              });
       } catch (error) {
              res.json({
                     success: false,
                     error: true,
                     message: error.message,
              });
       }
};



const getAllPosts = async(req,res) => {
       try {
              const posts =await Posts.find()
              res.status(200).json({
                     data:posts,
                     success:true
              })

       } catch (error) {
              console.log(error);
              
       }
}

export { uploadPost, getPostinfo,getAllPosts }