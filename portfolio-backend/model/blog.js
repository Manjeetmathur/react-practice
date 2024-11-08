import mongoose,{Schema} from "mongoose";

const BlogSchema = mongoose.Schema({
       title : {
              type : String,
       },
       content:{
              type:String
       },
       owner : {
             type: Schema.Types.ObjectId,
             ref : "User"
       },
       
}, { timestamps: true })

export const Blog = mongoose.model("Blog",BlogSchema) 