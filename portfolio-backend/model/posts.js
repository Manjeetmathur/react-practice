import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const postSchema = mongoose.Schema({
       postTitle : {
              type : String
       },
       postCategory : {
              type : String
       },
       postDescription : {
              type : String
       },
       postImage : {
              imageUrl:{
                     type:String
              },
              publicId : {
                     type:String
              }
       },
       link:{
              type:String
       },
       price:{
              type : Number
       },
       stock:{
              type : Number
       },
       like:{
              type : Boolean
       },
       owner : {
             type: Schema.Types.ObjectId,
             ref : "User"
       }
},{timestamps:true})
postSchema.plugin(mongooseAggregatePaginate)

export const Posts = mongoose.model("Posts",postSchema)

