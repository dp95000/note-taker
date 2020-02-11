const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

// for main page
app.get('/',(_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', 'index.html')
    res.sendfile(filePath);
});

// for notes page
app.get('/notes',(_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', 'notes.html')
    res.sendfile(filePath);
});

// for loading assets - CSS & JS
app.get('/assets/js/index.js',(_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', 'notes.html')
    res.sendfile(filePath);
});


// 404 not found page
app.get('*',(_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', '404.html')
    res.sendfile(filePath);
});

app.listen(port, () => {
    console.log(`Test application listening on port ${port}!`)
});