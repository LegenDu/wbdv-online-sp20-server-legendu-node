const quizzesDao = require('../daos/quizzes.dao.server')
const findAllQuizzes = () =>
    quizzesDao.findAllQuizzes()

const findQuizById = (qid) =>
    quizzesDao.findQuizById(qid)


module.exports = {
    findAllQuizzes,
    findQuizById
}



// const createQuiz = (quiz) =>
//     quizzes.push(quiz)
//
// const deleteQuiz = (quizId) =>
//     quizzes = quizzes.filter(quiz => quiz._id != quizId)
//
// // const findAllQuizzes = () => quizzes
// const findAllQuizzes = () =>
//     quizzesModel.find()
//
// const findQuizById = (quizId) =>
//     quizzes.find(quiz => quiz._id = quizId)

// module.exports= {
//     createQuiz,
//     deleteQuiz,
//     findAllQuizzes,
//     findQuizById
// }
