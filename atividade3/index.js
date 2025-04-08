const express = require('express');
const calculadora = require('./util/calculadora');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/somar/:a/:b', (req, res) => {
    try {
        const resultado = calculadora.somar(
            parseFloat(req.params.a), 
            parseFloat(req.params.b)
        );
        res.send(`Resultado: ${resultado}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get('/subtrair/:a/:b', (req, res) => {
    try {
        const resultado = calculadora.subtrair(
            parseFloat(req.params.a), 
            parseFloat(req.params.b)
        );
        res.send(`Resultado: ${resultado}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get('/multiplicar/:a/:b', (req, res) => {
    try {
        const resultado = calculadora.multiplicar(
            parseFloat(req.params.a), 
            parseFloat(req.params.b)
        );
        res.send(`Resultado: ${resultado}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get('/dividir/:a/:b', (req, res) => {
    try {
        const resultado = calculadora.dividir(
            parseFloat(req.params.a), 
            parseFloat(req.params.b)
        );
        res.send(`Resultado: ${resultado}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});