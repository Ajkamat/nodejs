const express = require('express');

var app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send({
	name: 'Vishal',
	blog: 'https://insagram/iamvishalchopra.com',
	likes: ['Eat', 'Code', 'Sleep']
	});
});

app.get('/about', (req, res) => {
	res.send('About Page');
});

app.get('/error', (req, res) => {
	res.send({
		errorMsg:'Unable to find the page'
	});
});

app.listen(port, () => {
	console.log(`App listening on port number :- ${port}...!!!`);
});