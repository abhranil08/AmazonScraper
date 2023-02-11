import Express from 'express';
import { login, register, logout } from "../controllers.auth.js"

const router = Express.Router();

router.post("/login", (req,res) => {
    res.send("it works!");
});

router.post("/register", (req,res) => {
    res.send("it works!");
});

router.post("/logout", (req,res) => {
    res.send("it works!");
});



export default router;
