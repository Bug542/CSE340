import * as studentModel from '../models/studentModel.js';

export const home = (req, res) => {
    res.render('home', { title: 'Home Page' });
};

export const about = (req, res) => {
    res.render('about', { title: 'About Page' });
};

export const products = (req, res) => {
    res.render('products', { title: 'Products Page' });
};

export const student = (req, res) => {
    const student = studentModel.getStudent();
    res.render('student', student);
};
