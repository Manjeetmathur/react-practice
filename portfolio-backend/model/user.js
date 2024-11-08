import mongoose from "mongoose"

const userSchema = mongoose.Schema({
       name : {
              type : String,
              // required:true,
       },
       username:{
              type:String,
              // required:true,
              unique:true
       },
       email : {
              type : String,
              unique : true,
              // required:true
       },
       password : {
              type : String,
              // required:true
       },
       phonenumber : {
              type : String,
              // required:true
       },
       profession:{
              type:String,
              // required:true,
       },
       title : {
              type:String,
              // required:true
       },
       description : {
              type : String,
              // required:true
       },
       profile: {
              imageUrl:{
                     type:String
              },
              publicId : {
                     type:String
              },
              
       },
       resume: {
              imageUrl:{
                     type:String
              },
              publicId : {
                     type:String
              }
       },
       linkedinlink:{
              type:String,
       },
       githublink:{
              type:String,
       },
       instagramlink:{
              type:String,
       },
       facebooklink:{
              type:String,
       },
      
},
{
       timestamps : true
})

export const User = mongoose.model("User",userSchema)