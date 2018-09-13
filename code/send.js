//require the library
//There are two api's. Promise based and callback based. I am using callback based.
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) { // 1. Connect to RabbitMQ server
  conn.createChannel(function(err, ch) { // 2. Create a channel
    var q = 'hello';
    var msg = 'Health Data Hub is releasing on 25th September!';

    ch.assertQueue(q, {durable: false}); // 3. Create a queue for the channel.
    ch.sendToQueue(q, Buffer.from(msg)); // 4. Send data to the queue.
    console.log(" [x] Sent %s", msg);
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500); // 5. Close the Queue 
});

// Declaring a queue is Idempotent. Once declared - it will only be created if it doesn't exist already.s