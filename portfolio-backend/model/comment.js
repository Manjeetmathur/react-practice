import mongoose,{Schema} from "mongoose";

const CommentSchema = mongoose.Schema({
       commentby : {
             type: Schema.Types.ObjectId,
             ref : "User"
       },
       post : {
              type : Schema.Types.ObjectId,
              ref:"Posts"
       },
       content:{
              type:String
       }
}, { timestamps: true })

export const Comment = mongoose.model("Comment",CommentSchema) 