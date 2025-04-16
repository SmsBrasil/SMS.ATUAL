const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Sms = require('./models/Sms');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro ao conectar:', err));

app.post('/sms', async (req, res) => {
  const { numero, mensagem } = req.body;
  try {
    const sms = new Sms({ numero, mensagem });
    await sms.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar SMS' });
  }
});

app.get('/', (req, res) => {
  res.send('API de recebimento de SMS funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
