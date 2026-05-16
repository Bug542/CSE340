import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import * as pagesController from './src/controllers/pagesController.js';
import { fileURLToPath } from 'url';
import { dirname as pathDirname } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const app = express();

const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.get('/', pagesController.home);
app.get('/about', pagesController.about);
app.get('/products', pagesController.products);
app.get('/student', pagesController.student);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
