import { Router } from "express"
import userRouter from "./userRouter.js"
import transactionRouter from "./transactionRouter.js"

const router = Router()

router.use(userRouter)
router.use(transactionRouter)

export default router