require('dotenv').config();
const amqp = require('amqplib');
const { insertTemperature } = require('./temperatureModel');
const db = require('./db');

const RABBITMQ_URL = process.env.RABBITMQ_URL;
const QUEUE_NAME = process.env.QUEUE_NAME;

async function startConsumer() {
  try {
    const conn = await amqp.connect(RABBITMQ_URL);
    const channel = await conn.createChannel();

    await channel.assertQueue(QUEUE_NAME, { durable: false });
    console.log(`[✓] Connected to RabbitMQ. Listening to "${QUEUE_NAME}"...`);

    channel.consume(QUEUE_NAME, async (msg) => {
      if (msg !== null) {
        try {
          const data = JSON.parse(msg.content.toString());
          console.log('[📦] Received:', data);

          await insertTemperature(data.deliveryId, data.temperature);
          channel.ack(msg);
        } catch (err) {
          console.error('[✘] Failed to process message:', err);
          channel.nack(msg, false, false); // discard message
        }
      }
    });
  } catch (err) {
    console.error('[!] RabbitMQ connection failed. Retrying in 3s...');
    setTimeout(startConsumer, 3000); // retry after 3 seconds
  }
}

startConsumer();
