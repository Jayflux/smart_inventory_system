const db = require('./db');

const getAllItems = () => db.query('SELECT * FROM items');
const getItemById = (id) => db.query('SELECT * FROM items WHERE id = ?', [id]);
const createItem = (item) => db.query(
    'INSERT INTO items (name, quantity, location, category) VALUES (?, ?, ?, ?)',
    [item.name, item.quantity, item.location, item.category]
);
const updateItem = (id, item) => db.query(
    'UPDATE items SET name = ?, quantity = ?, location = ?, category = ? WHERE id = ?',
    [item.name, item.quantity, item.location, item.category, id]
);
const deleteItem = (id) => db.query('DELETE FROM items WHERE id = ?', [id]);

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};
