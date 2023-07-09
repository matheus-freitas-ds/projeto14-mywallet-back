import { Router } from "express"
import { signup, signin } from "../controllers/authController.js"

const userRouter = Router()

userRouter.post("/cadastro", signup)
userRouter.post("/", signin)

export default userRouter