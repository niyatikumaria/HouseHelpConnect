require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const maidRoutes = require('./routes/maidRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/maids', maidRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/api', (req, res) => {
  res.send('HouseHelp Connect API is running');
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error('MongoDB connection error:', err));
