
// let questions = [
//     {"title": "JPA True False", "question":
//             "JPA stands for Java Persistence API", "correct": "TRUE", "type": "TRUE_FALSE", answer: "", choices: ["TRUE", "FALSE"]},
//     {"title": "JPA Multiple Choice", "question":
//             "What does JPA stand for?", "correct": "Java Persistence API",
//         "type": "MULTIPLE_CHOICE",  answer: "", "choices":
//             ["Java Pseudo API", "Java Persistence API", "JSON Persistence API",
//                 "JavaScript Persistence API"]},
//     {"title": "JSON True False", "question":
//             "JSON stands for Java Object Notation", "correct": "FALSE","type": "TRUE_FALSE", answer: "", choices: ["TRUE", "FALSE"]},
//     {"title": "JSON Multiple Choice", "question":
//             "What does JSON stand for?", "correct": "JavaScript Object Notation",
//         "type": "MULTIPLE_CHOICE", answer: "", "choices": ["JavaScript Object Notation",
//             "JavaScript Object Normalization", "Java Object Normalization", "Java Object Notation"]},
//     {"title": "CSS True False", "question":
//             "CSS stands for Cascading Style Sheet", "correct": "TRUE", "type": "TRUE_FALSE", answer: "", choices: ["TRUE", "FALSE"]},
//     {"title": "CSS Multiple Choice", "question":
//             "What does CSS stand for?", "correct": "Cascading Style Sheet", "type":
//             "MULTIPLE_CHOICE", answer: "", "choices": ["Class Style Sheet", "Cascading Screen Style",
//             "Cascading Style Sheet", "Cascading Style Screen"]}
// ]
const questionsDao = require('../daos/questions.dao.server')

const findAllQuestions = () =>
    questionsDao.findAllQuestions()

const findQuestionById = (qid) =>
    questionsDao.findQuestionById(qid)

const findQuestionsForQuiz = (qid) =>
    questionsDao.findQuestionsForQuiz(qid)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}



// const findQuestionsForQuiz = (quizId) =>
//     questions.filter(question => question.quizId === quizId)

