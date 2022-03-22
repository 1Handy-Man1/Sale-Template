const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const ejsLint = require('ejs-lint');

const app = express()
const PORT = process.env.PORT || 5000;

// EJS Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.use( express.static( "public" ) );
// app.use(ejsLint)

// Routes to the pages
app.get('/', (req, res) => {
    res.render('index', { title: "Home"})
})
app.get('/about', (req, res) => {
    res.render('about', { title: "About Us"})
})
app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact Us"})
})
app.get('/login', (req, res) => {
    res.render('login', { title: "Login"})
})
app.get('/register', (req, res) => {
    res.render('register', { title: "Register"})
})
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: "<%- name %>"})
})


// listing port 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

/* const start = async () => {
    try{
        
    }
} */