const db = require('../db');
const asyncHandler = require('express-async-handler');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const getBookById = asyncHandler(async (req, res) => {
	const { bookId } = req.params;

	const book = await db.getBookById(bookId);

	if (!book) {
		throw new CustomNotFoundError('Book not found');
	}

	res.send(
		`Book name: ${book.name} / Reserved: ${book.reserved ? 'Yes' : 'No'}`
	);
});

const createReservation = asyncHandler(async (req, res) => {
	const { bookId } = req.params;

	const book = await db.getBookById(bookId);

	if (!book) {
		throw new CustomNotFoundError('Book not found');
	}

	book.reserved = true;
	res.send(`Book name: ${book.name} is now reserved!`);
});

module.exports = { getBookById, createReservation };
