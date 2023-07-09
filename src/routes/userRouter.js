import { Router } from "express"
import { signup, signin } from "../controllers/authController.js"
import { validateSchema } from "..middlewares/validateSchema.js"
import { userSchema } from "../schemas/userSchema.js"

const userRouter = Router()

userRouter.post("/cadastro", validateSchema(userSchema), signup)
userRouter.post("/", validateSchema(loginSchema), signin)

export default userRouter