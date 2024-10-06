const Item = require('../models/itemModel');

// Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new item
const createItem = async (req, res) => {
  const { name, description, quantity } = req.body;

  if (!name || !quantity) {
    return res.status(400).json({ message: 'Name and quantity are required' });
  }

  const item = new Item({ name, description, quantity });

  try {
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an item
const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name, description, quantity },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getItems, createItem, updateItem };
