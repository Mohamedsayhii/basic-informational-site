const express = require('express');
const app = express();
const path = require('node:path');

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.use((req, res, next) => {
	throw new Error('OH NO!');
	// or next(new Error("OH NO!"));
});
app.use((err, req, res, next) => {
	console.error(err);
	// We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
	res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`My first Express app - listening on port ${PORT}!`);
});
