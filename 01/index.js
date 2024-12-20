const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.status(200).send(`<h1>Home page</h1>`);
});

app.get('/:echo', (req, res) => {
    return res.send(`<h1>${req.params.echo}</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});