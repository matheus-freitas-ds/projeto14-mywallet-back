import { Router } from "express"
import { newTransaction, showTransactions } from "../controllers/transactionController.js"
import { validateAuth } from "../middlewares/validateAuth.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { transactionSchema } from "../schemas/transactionSchema.js"

const transactionRouter = Router()
transactionRouter.use(validateAuth)

transactionRouter.post("/nova-transacao", validateSchema(transactionSchema), newTransaction)
transactionRouter.get("/home", showTransactions)

export default transactionRouter