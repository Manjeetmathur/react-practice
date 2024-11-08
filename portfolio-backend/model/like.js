import mongoose,{Schema} from "mongoose";

const LikeSchema = mongoose.Schema({
       likedby : {
             type: Schema.Types.ObjectId,
             ref : "User"
       },
       post : {
              type : Schema.Types.ObjectId,
              ref:"Posts"
       },
}, { timestamps: true })

export const Like = mongoose.model("Like",LikeSchema) 