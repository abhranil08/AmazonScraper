import Express from "express";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import likeRoutes from "./routes/likes.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

const app = Express();

app.use("/api/auth", userRoutes );
app.use("/api/post", postRoutes );
app.use("/api/like", likeRoutes );
app.use("/api/comments", commentRoutes );
app.use("/api/auth", authRoutes );

app.listen(3000, () => {console.log("App listening..")});