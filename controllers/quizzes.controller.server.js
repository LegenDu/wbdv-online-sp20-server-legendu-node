const quizService = require('../services/quizzes.service.server')

module.exports = function(app){
    app.get('/api/quizzes', (req, res) =>
        quizService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))

    app.get('/api/quizzes/:qzid', (req, res) =>
        quizService.findQuizById(req.params['qzid'])
            .then(quiz => res.json(quiz)))
    
    // app.post('/api/quizzes', (req, res) => {
    //     const quiz = req.body
    //     quiz._id = new Date().getTime() + ""
    //     quizService.createQuiz(quiz)
    //     res.send(quiz)
    // })
    //
    // app.delete('/api/quizzes/:qid', (req, res) => {
    //     const quizId = req.params['qid'];
    //     quizService.deleteQuiz(quizId)
    //     res.send(200)
    // })
}
