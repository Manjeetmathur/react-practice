import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { getUserinfo, login, logout, register, updateImage } from "../controllers/userController.js";
import { verifyJwt } from "../middlewares/auth.js";
import { getAllPosts, getPostinfo, uploadPost } from "../controllers/postController.js";
import { getAllLikedPostByUser, togglePostLike } from "../controllers/likeController.js";
import { comment, getAllcommentedPostByUser } from "../controllers/commentController.js";
import { createBlog, getAllblogPost, getAllblogPostByUser } from "../controllers/blogController.js";

const router = Router();

router.route("/user-profile").patch(
       upload.fields(
              [
                     { name: "profile" },
                     { name: "resume" }
              ]
       ),
       updateImage
);
router.route("/user-register").post(register);
router.route("/user-login").post(login);
router.route("/user-logout").post(logout);
router.route("/user-auth").post(verifyJwt)
router.route("/user-info/userId:").get(getUserinfo);

router.route("/upload-posts").post(upload.single("postImage"),uploadPost)
router.route("/post-info/userId:").get(getPostinfo);
router.route("/all-posts").get(getAllPosts);

router.route("/like-posts").post(togglePostLike);
router.route("/all-liked-posts/userId:").get(getAllLikedPostByUser);
router.route("/all-commented-posts/userId:").get(getAllcommentedPostByUser);
router.route("/all-blogs/userId:").get(getAllblogPostByUser);
router.route("/all-blogs").get(getAllblogPost);

router.route("/comment").post(comment);
router.route("/create-blog").post(createBlog);



export default router