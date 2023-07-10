import { Router } from "express"
import { newTransaction } from "../controllers/transactionController.js"
import { validateAuth } from "../middlewares/validateAuth.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { transactionSchema } from "../schemas/transactionSchema.js"

const transactionRouter = Router()
transactionRouter.use(validateAuth)

userRouter.post("/nova-transacao", validateSchema(transactionSchema), newTransaction)

export default transactionRouter