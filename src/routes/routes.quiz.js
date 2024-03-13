import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const quizFile = path.join(process.cwd(), "src/db", "data.json");
const router = Router();

router.get('/', (req, res) => {
    const { category, level } = req.query;
    const quizzes = readFile();
    let filteredQuizzes = quizzes;

    if (category && level) {
        // Filtrar los quizzes basados en los parámetros de categoría y nivel
        filteredQuizzes = quizzes.filter(quiz => quiz.category === category && quiz.level === level);
    }

    res.json(filteredQuizzes);
});

function readFile() {
    const result = fs.readFileSync(quizFile, "utf-8");
    const json = JSON.parse(result);
    return json;
}

export default router;



