const express = require('express');
const app = express();
const port = 8000;
const vigenere = require('caesar-salad').Vigenere;

app.get('/', (req, res) => {
    return res.status(200).send('Home page');
});

app.get('/encode/:password', (req, res) => {
    return res.send(`<h1>${vigenere.Cipher('c').crypt(req.params.password)}</h1>`);
});

app.get('/decode/:password', (req, res) => {
    return res.send(`<h1>${vigenere.Decipher('c').crypt(req.params.password)}</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});