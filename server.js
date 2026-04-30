const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

app.get('/products', (req, res) => {
    res.render('products', { title: 'Products Page' });
});

app.get('/student', (req, res) => {
    const student = {
        name: 'Brandon Pineda',
        id: '123456',
        email: 'brandon@email.com',
        address: 'West Valley City, Utah'
    };

    res.render('student', student);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
