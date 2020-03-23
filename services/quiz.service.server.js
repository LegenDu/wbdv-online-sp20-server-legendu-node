let quizzes = [
    {_id: '123', title: 'Quiz 1'},
    {_id: '234', title: 'Quiz 2'},
    {_id: '345', title: 'Quiz 3'},
];

const createQuiz = (quiz) =>
    quizzes.push(quiz)

const deleteQuiz = (quizId) =>
    quizzes = quizzes.filter(quiz => quiz._id != quizId)

const findAllQuizzes = () => quizzes

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id = quizId)

module.exports= {
    createQuiz,
    deleteQuiz,
    findAllQuizzes,
    findQuizById
}
