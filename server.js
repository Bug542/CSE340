import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// env
const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;
const name = process.env.NAME;

// middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// ROUTES
app.get('/', (req, res) => {
    res.render('home', { title: 'Home', name });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About', name });
});

app.get('/products', (req, res) => {
    res.render('products', { title: 'Products', name });
});

// ✅ ASSIGNMENT REQUIRED ROUTE
app.get('/student', (req, res) => {
    res.render('student', {
        title: 'Student Info',
        student: {
            name: 'John Doe',
            id: '123456',
            email: 'john@example.com',
            address: '123 Main St, Utah'
        }
    });
});

// start server
app.listen(PORT, () => {
    console.log(`Server running: http://127.0.0.1:${PORT}`);
});