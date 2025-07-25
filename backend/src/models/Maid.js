const mongoose = require('mongoose');

const MaidSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: String,
  locality: { type: String, required: true },
  availableTimings: String,
  skills: [String],
  experience: String,
  available: { type: Boolean, default: false }  // <-- Add this
});


module.exports = mongoose.model('Maid', MaidSchema);
