import { db } from "../database/databaseConnection.js"

export async function newTransaction(req, res) {
    const { value, description, type } = req.body

    try {
        const transaction = { value: Number(value), description, type}
            await db.collection("transactions").insertOne("transaction")
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}