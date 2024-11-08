import { uploadOnCloudinary, uploadOnCloudinaryPdf } from "../middlewares/multer.js";
import { User } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { username, email, password, confirmPassword,phonenumber } = req.body;

  try {
    
    if ( !username || !email || !password || !confirmPassword || !phonenumber) {
      throw new Error("All fieds required");
    }
    const existedUser = await User.findOne({ email: email });
    if (existedUser) {
      throw new Error("user is already registered...");
    }
    if (password !== confirmPassword) {
      throw new Error("password does not match . . .");
    }
    const hashPassword = await bcrypt.hash(password, 2);

    const user = await User.create({
      username,
      email,
      password: hashPassword,
      phonenumber
    });
    
    res.status(200).json({
      success: true,
      data: user,
      message: "user registered successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user is not registered...");
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new Error("password is incorrect . . .");
    }
    const tokenData = {
      _id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
      expiresIn: 60 * 60 * 8,
    });
    // console.log(token);

    const options = {
      httpOnly: true,
      secure: true,
    };
    res.status(200).cookie("token",token,options).json({
      success: true,
      message: "user logged in successfully . . .",
      data: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
};

const logout = async (req, res) => {
  res.status(200).clearCookie("token").json({
    message: "loggoed out",
  });
};

const updateImage = async (req, res) => {
  const
    {
      name,
      title,
      description,
      userId,
      linkedinlink,
      githublink,
      instagramlink,
      facebooklink,
      profession
    } = req.body;

  try {
    if (!name || !title || !description || !userId || !profession) {
      throw new Error(" * (compulsory)  fields are required . . ")
    }
    const tokenuser = await User.findById(userId);

    if (!tokenuser) {
      throw new Error("Invalid user access");
    }

    const profileFilePath = req.files?.profile[0]?.path

    if (!profileFilePath) {
      throw new Error("file : missing profile path");
    }
    const profile = await uploadOnCloudinary(profileFilePath);

    if (!profile) {
      throw new Error("Profile upload error");
    }
    const resumeFilePath = req.files?.resume[0]?.path

    const resume = await uploadOnCloudinary(resumeFilePath);
    console.log("hahaa");
    await User.findByIdAndUpdate(
      tokenuser?._id,
      {
        $set: {
          "profile.imageUrl": profile.url,
          "profile.publicId": profile.public_id,
          "resume.imageUrl": resume.url || "",
          "resume.publicId": resume.public_id || "",
          linkedinlink: linkedinlink || "",
          githublink : githublink|| "",
          instagramlink : instagramlink || "" ,
          facebooklink :facebooklink || "",
          name,
          title,
          description,
        },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "User Details uploaded successfully",
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const getUserinfo = async (req, res) => {
  const { userId } = req.query;

  try {
    const user = await User.findById(userId);
    res.status(200).json({
      success: true,
      message: " user Info get successfully",
      data: [
        {
          "name":`${user.name}`,
          "profession":`${user.profession}`,
          "username" : `${user.username}`,
          "title":`${user.title}`,
          "description": user.description,
          "imgUrl": `${user.profile.imageUrl}`,
          "imgId": `${user.profile.publicId}`,
          "resumeImgUrl": `${user.resume.imageUrl}`,
          "resumeImgId": `${user.resume.publicId}`,
          "linkedinlink":  `${user.linkedinlink || ""}`,
          "githublink" : `${user.githublink|| ""}`,
          "instagramlink" :`${user.instagramlink|| ""}` ,
          "facebooklink" :`${user.facebooklink|| ""}`,
        }
      ],
    });
  } catch (error) {
    res.json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};






export { updateImage, register, login, logout, getUserinfo };
