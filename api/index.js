import Express from "express";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import likeRoutes from "./routes/likes.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

import cors from "cors";
import cookieParser from "cookie-parser";

const app = Express();

// middlewares 
app.use(Express.json());
app.use(Express.urlencoded({extended : true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(Express.json());
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(cookieParser());


// routes
app.use("/api/users", userRoutes );
app.use("/api/posts", postRoutes );
app.use("/api/like", likeRoutes );
app.use("/api/comments", commentRoutes );
app.use("/api/auth", authRoutes );

app.listen(3000, () => {console.log("App listening..")});