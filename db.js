const authors = [
	{ id: 1, name: 'Bryan' },
	{ id: 2, name: 'Christian' },
	{ id: 3, name: 'Jason' },
];

const books = [
	{
		id: 1,
		name: 'Gulag Archipelago',
		reserved: false,
	},
	{
		id: 2,
		name: '48 Laws of Power',
		reserved: false,
	},
	{
		id: 3,
		name: 'Brothers Karamazov',
		reserved: false,
	},
];

async function getAuthorById(authorId) {
	return authors.find((author) => author.id === authorId);
}

async function getBookById(bookId) {
	return books.find((book) => book.id == bookId);
}

module.exports = { getAuthorById, getBookById };
