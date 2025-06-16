const db = require('../db');

const getAllDeliveries = () => db.query('SELECT * FROM deliveries');
const getDeliveryById = (id) => db.query('SELECT * FROM deliveries WHERE id = ?', [id]);
const createDelivery = (delivery) => db.query(
    'INSERT INTO deliveries (item_id, destination, status) VALUES (?, ?, ?)',
    [delivery.item_id, delivery.destination, delivery.status]
);
const updateStatus = (id, status) => db.query(
    'UPDATE deliveries SET status = ? WHERE id = ?',
    [status, id]
);
const deleteDelivery = (id) => db.query('DELETE FROM deliveries WHERE id = ?', [id]);

module.exports = {
    getAllDeliveries,
    getDeliveryById,
    createDelivery,
    updateStatus,
    deleteDelivery
};
