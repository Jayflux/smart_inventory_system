const db = require('./db');

async function insertTemperature(deliveryId, temperature) {
    const sql = "INSERT INTO temperature_logs (delivery_id, temperature) VALUES (?, ?)";
    await db.execute(sql, [deliveryId, temperature]);
}

module.exports = { insertTemperature };
