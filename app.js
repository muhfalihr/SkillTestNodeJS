const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hallo, Nama Saya Muhammad Falih Romadhoni');
});

app.listen(port, () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});
