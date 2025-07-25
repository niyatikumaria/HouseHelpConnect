const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  maidId: { type: mongoose.Schema.Types.ObjectId, ref: 'Maid', required: true },
  userName: String,
  contact: String,
  date: String,
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Booking', BookingSchema);
