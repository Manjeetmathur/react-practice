import mongoose from "mongoose"
import { Like } from "../model/like.js"
import { Posts } from "../model/posts.js"

const togglePostLike = async (req, res) => {
       const { postId, userId } = req.body
       try {
              // console.log(postId,userId);
              
              const isPostLiked = await Like.findOne({
                     post: postId,
                     likedby: userId
              })
              // console.log(isPostLiked)

              if (isPostLiked === null) {
                     const postLike = await Like.create({
                            post: postId,
                            likedby: userId
                     })
                     // console.log("liked");
                     
                     return res.status(200).json({
                            message: "Post Liked",
                            success:true,
                            liked:true,
                            data: postLike
                     })
                     
              }
              else {
                     // console.log("unliked");
                     await Like.findByIdAndDelete(isPostLiked._id);
                     return res.status(200).json({
                            message: "post unliked",
                            success:true,
                            liked:false
                     })
              }
       } catch (error) {
              return res.json({
                     mesaage: error.message,
              })
       }
}

const getAllLikedPostByUser = async (req, res) => {
       const { userId } = req.query;
       // console.log(userId);
       
       try {
              const allPosts = await Like.aggregate([

                     {
                            $match: {
                                   likedby: new mongoose.Types.ObjectId(userId)
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
                                   "result._id": 1,
                            }
                     }

              ]);

              // console.log(allPosts);

              return res.status(200).json({
                     success: true,
                     data: allPosts,
                     like : true,
                     message: "Liked posts fetched successfully."
              });
       } catch (error) {
              return res.status(500).json({
                     success: false,
                     message: error.message
              });
       }
};


export { togglePostLike, getAllLikedPostByUser }