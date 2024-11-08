
import { User } from "../model/user.js"
import { Blog } from "../model/blog.js"

const createBlog = async (req, res) => {
       const { userId, content, title , blogId} = req.body
       try {
              if (!userId) {
                     throw new Error("invalid User Access . . .")
              }

              const user = await User.findById(userId)

              if (!user) {
                     throw new Error("invalid user Access . . .")
              }

              if(!title || !content ){
                     throw new Error("All fields are required . . . ")
              }

              if (!blogId) {
                     const blog = await Blog.create({
                            owner: userId,
                            title,
                            content
                     })
                     return res.status(200).json({
                            message: "blog created successfully",
                            success: true,
                            data: blog
                     })
              }else{
                     const isBlog = await Blog.findById(blogId )

                     if(!isBlog){
                            throw new Error(" Invalid Blog access");
                     }

                     console.log("hii ... ");
                     
                     if (isBlog) {
                            const blog = await Blog.findByIdAndUpdate(
                                   blogId,
                                   {
                                          $set: {
                                                 title,
                                                 content,
                                                 
                                          }
                                   }, {new : true}
                            )
                            return res.status(200).json({
                                   message: "blog updated successfully",
                                   success: true,
                                   data: blog
                            })
       
                     }
              }
       } catch (error) {
              return res.json({
                     message: error.message,
              })
       }
}
const getAllblogPostByUser = async (req, res) => {
       const { userId } = req.query;
       try {
              const allBlog = await Blog.find({owner:userId});
              return res.status(200).json({
                     success: true,
                     data: allBlog,
                     message: "blog posts fetched successfully."
              });
       } catch (error) {
              return res.status(500).json({
                     success: false,
                     message: error.message
              });
       }
};
const getAllblogPost = async (req, res) => {
       try {
              const allBlog = await Blog.find();
              return res.status(200).json({
                     success: true,
                     data: allBlog,
                     message: " All blog posts fetched successfully."
              });
       } catch (error) {
              return res.status(500).json({
                     success: false,
                     message: error.message
              });
       }
};




export { createBlog, getAllblogPostByUser,getAllblogPost }