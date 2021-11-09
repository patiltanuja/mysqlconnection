const { Kafka } = require('kafkajs');
const config = require('./src/config/kafkaConnection');// 1.Instantiating kafka
const kafka = new Kafka(config);// 2.Creating Kafka Producer
const producer = kafka.producer();
const runProducer = async () => {const message = {
nTransOrderID: 1000,
sTransOrderCode: "TO-101212"
}// 3.Connecting producer to kafka broker.
await producer.connect();
await producer.send({
topic: 'medium-topic-01',
messages:
[{ value: JSON.stringify(message) }],
})}