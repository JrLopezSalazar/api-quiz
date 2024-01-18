import {Router} from 'express'
import fs from 'fs'
import path from 'path'

const quizFile = path.join(process.cwd(), "src/db", "data.json")
const router = Router()

router.get('/', (req, res) => {
    const quizzes = readFile()
    res.json(quizzes)
 })


function readFile() {
    const result = fs.readFileSync(quizFile, "utf-8")
    const json = JSON.parse(result)
    return json
}



 export default router


