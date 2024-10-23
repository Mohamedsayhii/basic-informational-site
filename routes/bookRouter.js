// routes/authorRouter.js
const { Router } = require('express');
const {
	getBookById,
	createReservation,
} = require('../controllers/bookController');

const bookRouter = Router();

bookRouter.get('/', (req, res) => res.send('All books'));

bookRouter.get('/:bookId', getBookById);

bookRouter.post('/:bookId/reserve', createReservation);

module.exports = bookRouter;
