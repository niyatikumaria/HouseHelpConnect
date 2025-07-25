const Maid = require('../models/Maid');

// Register maid
exports.registerMaid = async (req, res) => {
  try {
    const newMaid = new Maid(req.body);
    await newMaid.save();
    res.status(201).json(newMaid);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get maids by locality
exports.getMaids = async (req, res) => {
  try {
    const { locality } = req.query;
    const query = locality ? { locality } : {};
    const maids = await Maid.find(query);
    res.json(maids);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
