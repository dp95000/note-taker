const path = require('path');
const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 3000;

const dbFilePath = path.resolve(__dirname, '..', 'db', 'db.json');

// this lines insures that all elements in the 'public' folder are served. This is needed to insure CSS & JS assests are served to pages other than the root page.
app.use(express.static('public'));

// for main page
app.get('/',(_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', 'index.html')
    res.sendfile(filePath);
});

// for displaying notes page
app.get('/notes',(_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', 'notes.html')
    res.sendfile(filePath);
});

// for notes page
app.get('/api/notes', async (_, res) => {
    const fileData = await fs.readFile(dbFilePath, 'utf-8');
    const data = JSON.parse(fileData);
    res.json(data);
    console.log(fileData);
});


// 404 not found page
app.get('*',(_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', '404.html')
    res.sendfile(filePath);
});

// test message
app.listen(port, () => {
    console.log(`Test application listening on port ${port}!`)
});