import express from 'express'
import {config} from 'dotenv'
import quizRoutes from './routes/routes.quiz.js'
import cors from 'cors'

config()
const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3100

app.use("/api/quiz", quizRoutes )

app.listen(3100, () => {
    console.log(`server is running en ${PORT} 🤘 `)
   })

export default app;