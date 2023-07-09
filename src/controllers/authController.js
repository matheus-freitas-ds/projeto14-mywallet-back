import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { db } from "../database/databaseConnection.js"

export async function signup(req, res) {
    const { name, email, password } = req.body

    try {
        const user = await db.collection("users").findOne({ email })
        if (user) return res.sendStatus(409)

        const hash = bcrypt.hashSync(password, 10)

        await db.collection("users").insertOne({ name, email, password: hash })
        res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function signin(req, res) {
    const { email, password } = req.body

    try {
        const user = await db.collection('users').findOne({ email })
        if (!user) return res.sendStatus(404)

        const correctPassword = bcrypt.compareSync(password, user.password)
        if (!correctPassword) return res.sendStatus(401)

        const token = uuid()
        await db.collection("sessions").insertOne({ userId: user._id, token })
        res.status(200).send(token)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}