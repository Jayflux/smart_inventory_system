const deliveryModel = require('../models/deliveryModel');

exports.getDeliveries = async (req, res) => {
    const [rows] = await deliveryModel.getAllDeliveries();
    res.json(rows);
};

exports.getDelivery = async (req, res) => {
    const [rows] = await deliveryModel.getDeliveryById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Not found' });
    res.json(rows[0]);
};

exports.createDelivery = async (req, res) => {
    const { item_id, destination, status } = req.body;
    await deliveryModel.createDelivery({ item_id, destination, status });
    res.status(201).json({ message: 'Delivery created' });
};

exports.updateStatus = async (req, res) => {
    const { status } = req.body;
    await deliveryModel.updateStatus(req.params.id, status);
    res.json({ message: 'Status updated' });
};

exports.deleteDelivery = async (req, res) => {
    await deliveryModel.deleteDelivery(req.params.id);
    res.json({ message: 'Delivery deleted' });
};
