const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá! Sua aplicação Docker está funcionando!');
});

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
