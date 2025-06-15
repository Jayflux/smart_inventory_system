const itemModel = require('../models/itemModel');

exports.getItems = async (req, res) => {
    const [rows] = await itemModel.getAllItems();
    res.json(rows);
};

exports.getItem = async (req, res) => {
    const [rows] = await itemModel.getItemById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Item not found' });
    res.json(rows[0]);
};

exports.createItem = async (req, res) => {
    const { name, quantity, location, category } = req.body;
    await itemModel.createItem({ name, quantity, location, category });
    res.status(201).json({ message: 'Item created' });
};

exports.updateItem = async (req, res) => {
    const { name, quantity, location, category } = req.body;
    await itemModel.updateItem(req.params.id, { name, quantity, location, category });
    res.json({ message: 'Item updated' });
};

exports.deleteItem = async (req, res) => {
    await itemModel.deleteItem(req.params.id);
    res.json({ message: 'Item deleted' });
};
