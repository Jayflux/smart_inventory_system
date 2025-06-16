require("dotenv").config();
const amqp = require("amqplib");

async function publishTemperature() {
    try {
        const conn = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await conn.createChannel();
        const queue = process.env.QUEUE_NAME;

        await channel.assertQueue(queue, { durable: false });

        const message = {
            deliveryId: 3,
            temperature: 28.5, 
            timestamp: new Date().toISOString()
        };
        
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
        console.log("Sent: ", message);

        setTimeout(() => {
            conn.close();
            process.exit(0);
        }, 500);
    } catch (err) {
        console.error("Error:", err);
    }
}

publishTemperature();
