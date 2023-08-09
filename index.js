import express from "express"
import mongoose from "mongoose"
import {plans} from "./routes/plans.js"
import {MONGO_URI} from "./config/keys.js"

const app = express()

app.use(express.json())

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.get('/firstwordsaidonline', (_,res) => res.json('lo'))

app.use('/plans', plans)

app.listen(5001, () => console.log("This app is running on port 5001"))
