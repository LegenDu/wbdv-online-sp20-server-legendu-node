const quizzesModel = require('../models/quizzes/quizzes.models.server')
const findAllQuizzes = () => quizzesModel.find().populate('questions')
const findQuizById = (quizId) =>
    quizzesModel.findById(quizId)
const findQuestionsForQuiz = (qid) =>
    quizzesModel.findById(qid).populate('questions')
const createQuiz = (quiz) => {}
module.exports = { findAllQuizzes, findQuizById, findQuestionsForQuiz }
