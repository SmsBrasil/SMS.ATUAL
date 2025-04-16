const mongoose = require('mongoose');

const SmsSchema = new mongoose.Schema({
  numero: String,
  mensagem: String,
  recebidoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Sms', SmsSchema);
