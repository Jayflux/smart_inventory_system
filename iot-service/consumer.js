require('dotenv').config();
const amqp = require('amqplib');
const { insertTemperature } = require("./temperatureModel");

async function startConsumer() {
    try {
        const conn = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await conn.createChannel();
        const queue = process.env.QUEUE_NAME;

        await channel.assertQueue(queue, { durable: false });
        console.log(`Waiting for messages in "${queue}"...`);

        channel.consume(queue, async (msg) => {
            if (msg !== null) {
                try {
                    const data = JSON.parse(msg.content.toString());
                    console.log("Received:", data);

                    await insertTemperature(data.deliveryId, data.temperature);
                    channel.ack(msg);
                } catch (err) {
                    console.error("Failed to process message:", err);
                    channel.nack(msg, false, false);
                }
            }
        });

    } catch (err) {
        console.error("RabbitMQ error:", err);
    }
}

startConsumer();
