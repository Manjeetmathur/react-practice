import mongoose from "mongoose"
import { User } from "../model/user.js"
import { Comment } from "../model/comment.js"

const comment = async (req, res) => {
       const { userId, content , postId } = req.body
       try {
              if (!userId) {
                     throw new Error("invalid User Access . . .")
              }

              const user = await User.findById(userId)

              if (!user) {
                     throw new Error("invalid user Access . . .")
              }

              const isComment = await Comment.findOne({post : postId})

              if(isComment){
                     const comment = await Comment.findOneAndUpdate(
                            {post : postId},
                            {
                                   $set : {
                                          content 
                                   }
                            }
                     )
                     return res.status(200).json({
                            message: "comment updated successfully",
                            success:true,
                            data: comment
                     })

              }else{
                     const comment = await Comment.create({
                            commentby : userId,
                            post:postId,
                            content
                     })
                     return res.status(200).json({
                            message: "comment successfully",
                            success:true,
                            data: comment
                     })
              }

              

       } catch (error) {
              return res.json({
                     mesaage: error.message,
              })
       }
}
const getAllcommentedPostByUser = async (req, res) => {
       const { userId } = req.query;
       try {
              const allCommentedPosts = await Comment.aggregate([

                     {
                            $match: {
                                   commentby: new mongoose.Types.ObjectId(userId)
                            }
                     },
                     {
                            $lookup: {
                                   from: "posts",
                                   localField: "post",
                                   foreignField: "_id",
                                   as: "result"
                            }
                     },
                     {
                            $unwind: "$result"
                     },
                     {
                            $project: {
                                   "result.postTitle": 1,
                                   "result.postCategory": 1,
                                   "result.postDescription": 1,
                                   "result.postImage": 1,
                                   "result.createdAt": 1,
                            }
                     }

              ]);

              // console.log(allPosts);

              return res.status(200).json({
                     success: true,
                     data: allCommentedPosts,
                     message: "Liked posts fetched successfully."
              });
       } catch (error) {
              return res.status(500).json({
                     success: false,
                     message: error.message
              });
       }
};



export { comment,getAllcommentedPostByUser}