import { db } from "../database/databaseConnection.js"

export async function newTransaction(req, res) {
    const { value, description, type } = req.body

    try {
        const transaction = { value: Number(value), description, type, time: Date.now() }
        await db.collection("transactions").insertOne("transaction")
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function showTransactions(req, res) {

    try {
        const transactions = await db.collection("transactions").find().sort({ time: -1 }).toArray()
        res.send(transactions)
    } catch (err) {
        res.status(500).send(err.message)
    }
}