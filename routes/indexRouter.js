const { Router } = require('express');

const indexRouter = Router();

const links = [
	{ href: '/', text: 'Home' },
	{ href: 'about', text: 'About' },
	{ href: 'contact', text: 'Contact' },
];

const contact = [
	{ type: 'Phone', text: '+21652444176' },
	{ type: 'Email', text: 'mohamedsaihii@outlook.fr' },
];

const users = ['Rose', 'Cake', 'Biff'];

indexRouter.get('/', (req, res) => {
	res.render('index', { links: links, users: users });
});

indexRouter.get('/about', (req, res) => res.render('about', { links: links }));

indexRouter.get('/contact', (req, res) =>
	res.render('contact', { links: links, contact: contact })
);

indexRouter.post('/contact', (req, res) =>
	res.send('We will get back at you as soon as possible')
);

module.exports = indexRouter;
