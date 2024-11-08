import {v2 as cloudinary } from "cloudinary"
import fs from "fs"

import multer from "multer"

const storage = multer.diskStorage({
       destination : (req,file,cb) => cb(null,"./public/temp/"),
       filename : (req,file,cb) => {
              console.log(file.originalname);
              const date = new Date();
              cb(null,file.originalname)
       }
})

export const upload = multer({storage : storage})

cloudinary.config({
       cloud_name : "dtwftajii",
       api_key : "462968465744638",
       api_secret: "fUxqQQWJEQ3h3ZxCuHiXNiVXRcA",
})

const uploadOnCloudinary = async(path) => {
       // console.log(path);
       
       try {
              if(!path){
                     return null
              }

              const response = await cloudinary.uploader.upload(path,{
                     resource_type : "auto"
              })
              // console.log(response);
              
              fs.unlinkSync(path)
              return response

       } catch (error) {
              console.log("err on cloud" , error);
              return null
       }
}
const uploadOnCloudinaryPdf = async(path) => {
       try {
              if(!path){
                     return null
              }

              const response = await cloudinary.uploader.upload(path,{
                     resource_type : "row",
                     
              })
              fs.unlinkSync(path)
              return response

       } catch (error) {
              console.log("err on cloud" , error);
              return null
       }
}
export {uploadOnCloudinary,uploadOnCloudinaryPdf}