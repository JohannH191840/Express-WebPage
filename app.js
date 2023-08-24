// Imports

const express =require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('./public/images'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('main', { text: 'This is EJS'})
});

app.get('/team', (req, res) => {
    res.render('team', { text: 'Team Page'})
})

app.get('/contact', (req, res) => {
    res.render('contact', { text: 'Contact Page'})
})

app.get('/project', (req, res) => {
    res.render('project', { text: 'Project Page'})
})


app.listen(port, () => {
    console.log(`Server/App is running at`, port);
})



