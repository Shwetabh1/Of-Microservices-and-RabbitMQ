var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var ex = 'logs';

    ch.assertExchange(ex, 'fanout', {durable: false});

    ch.assertQueue('', {exclusive: true}, function(err, q) { //Each reciever will have their own queue
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
      ch.bindQueue(q.queue, ex, ''); 
      //A binding is a relationship between an exchange and a queue. 
      //This can be simply read as: the queue is interested in messages from this exchange.
      //
      ch.consume(q.queue, function(msg) {
        console.log(" [x] %s", msg.content.toString());
      }, {noAck: true});
    });
  });
});