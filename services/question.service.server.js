
// let questions = [
//     {_id: "123", title: "Question 1", quizId: "123", type: "TRUE_FALSE",
//         question: "Do you like the beach?",
//         correct: "TRUE"
//     },
//     {_id: "234", title: "Question 2", quizId: "123", type: "MULTIPLE_CHOICE",
//         question: "What is your favorite color?",
//         correct: "Blue",
//         options: [
//             "Yellow", "Blue", "Red", "Purple"
//      ]
//     },
//     {_id: "345", title: "Question 3", quizId: "123", type: "TRUE_FALSE",
//         question: "Do you like the mountain?",
//         correct: "TRUE"},
//     {_id: "456", title: "Question 4", quizId: "234", type: "MULTIPLE_CHOICE"},
//     {_id: "567", title: "Question 5", quizId: "123", type: "TRUE_FALSE",
//         question: "Do you like the sea?",
//         correct: "FALSE"
//     }
// ]
let questions = [
    {"_id": "123", "title": "JPA True False", "quizId": "234", "question":
            "JPA stands for Java Persistence API", "correct": "true", "type": "TRUE_FALSE"},
    {"_id": "234", "title": "JPA Multiple Choice", "quizId": "234", "question":
            "What does JPA stand for?", "correct": "Java Persistence API",
        "type": "MULTIPLE_CHOICE", "choices":
            ["Java Pseudo API", "Java Persistence API", "JSON Persistence API",
                "JavaScript Persistence API"]},
    {"_id": "345", "title": "JSON True False", "quizId": "234", "question":
            "JSON stands for Java Object Notation", "correct": "false","type": "TRUE_FALSE"},
    {"_id": "456", "title": "JSON Multiple Choice", "quizId": "345", "question":
            "What does JSON stand for?", "correct": "JavaScript Object Notation",
        "type": "MULTIPLE_CHOICE", "choices": ["JavaScript Object Notation",
            "JavaScript Object Normalization", "Java Object Normalization", "Java Object Notation"]},
    {"_id": "567", "title": "CSS True False", "quizId": "345", "question":
            "CSS stands for Cascading Style Sheet", "correct": "true", "type": "TRUE_FALSE"},
    {"_id": "678", "title": "CSS Multiple Choice", "quizId": "123", "question":
            "What does CSS stand for?", "correct": "Cascading Style Sheet", "type":
            "MULTIPLE_CHOICE", "choices": ["Class Style Sheet", "Cascading Screen Style",
            "Cascading Style Sheet", "Cascading Style Screen"]}
]


const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

module.exports = {
    findQuestionsForQuiz
}