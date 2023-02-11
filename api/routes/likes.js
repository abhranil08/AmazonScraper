import Express from 'express';

const router = Express.Router();

router.get("/test", (req,res) => {
    res.send("it works!");
});

export default router;
