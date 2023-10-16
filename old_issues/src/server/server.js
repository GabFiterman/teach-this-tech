const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors'); // Importe o pacote CORS
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3035;

// Configurar o bodyParser para lidar com JSON e dados de formulário
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração para permitir todas as origens (em um ambiente de desenvolvimento)
app.use(cors());

// Configurar conexão com o banco de dados PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

app.get('/', async (req, res) => {
    try {
        console.log('CONECTADO!');
        res.status(200).json({ message: 'Servidor está funcionando!' });
    } catch (e) {
        res.status(500).json({ error: `Ocorreu um erro ao se conectar: ${e}` });
        console.error('Erro ao tentar se conectar:', e);
    }
});


app.post('/save-data', async(req, res) => {
    try {
        const { name, email, notify } = req.body;

        const query = `
            INSERT INTO cadastro ( nome, email, notify_them )
            VALUES ($1, $2, $3)
        `;

        await pool.query(query, [name, email, notify]);

        res.status(200).json({message: `Dados salvos com sucesso!`});
        console.log(res);
    } catch (e) {
        res.status(500).json({error: `Ocorreu um erro ao salvar os dados: ${e}`});
        console.log(res);
        throw new Error('Erro ao salvar os dados: ', e);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})