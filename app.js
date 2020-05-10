const path = require('path'); // sets the pathway to local pages
const express = require('express'); // I'm not sure yet
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './public/templates/pages');
const partialsPath = path.join(__dirname, './public/templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('summary.hbs');
});

app.get('/java', (req, res) => {
    res.render('java.hbs');
})

app.get('/javascript', (req, res) => {
    res.render('javascript.hbs');
})

app.get('/php', (req, res) => {
    res.render('php.hbs');
})

app.get('/sql', (req, res) => {
    res.render('sql.hbs');
})

app.listen(port);