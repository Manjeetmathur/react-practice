import jwt from "jsonwebtoken";
import { User } from "../model/user.js";
export const verifyJwt = async (req, res, next) => {
  try {
    const {token} = req.body

    if (!token) {
      throw new Error("unauthorized Access");
    }
    const decodeToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);

    const user = await User.findById(decodeToken?._id);

    if (!user) {
      throw new Error("Invalid Accesss");
    }

    req.user = user;
    res.status(200).json({
      success:true,
      message:"user authenticated",
      data:user._id
    })
  } catch (error) {
    res.json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
