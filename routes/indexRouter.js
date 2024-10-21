const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

indexRouter.get('/about', (req, res) =>
	res.sendFile('about.html', { root: __dirname })
);

indexRouter.get('/contact-me', (req, res) =>
	res.sendFile('contact-me.html', { root: __dirname })
);

indexRouter.post('/contact-me', (req, res) =>
	res.send('We will get back at you as soon as possible')
);

module.exports = indexRouter;
