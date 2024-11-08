import dotenv from "dotenv"
import { connectDB } from "./db/db.js"
import { app } from "./app.js"
import cookieParser from "cookie-parser"
dotenv.config({
       path : "./.env"
})

connectDB()
.then(() => {
       app.listen(8000 || process.env.PORT, () => {
              console.log("hii i'm running");
              
       })
       
})
.catch((err) => {
       console.log("err : ",err);
       
})





