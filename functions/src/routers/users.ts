import * as express from "express";
const userRouter = express.Router();
import authMiddleware from "../midlewares/auth";

userRouter.use(authMiddleware());

userRouter.route("/my-account").get((req: any, res) => {
  res.status(200).json(req.user);
});

export { userRouter };
