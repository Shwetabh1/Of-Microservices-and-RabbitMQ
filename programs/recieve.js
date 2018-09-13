//require the library
//There are two api's. Promise based and callback based. I am using callback based.
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello'; //queue's once created can't be modified.

    ch.assertQueue(q, {durable: false}); //notice the queue name is same. It has 4 parameters. Name, Durability, Auto Delete and arguments
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true}); //noAck ensures an ACK is not sent back to exchange.
  });
});


/* Promise Based
 * amqp.connect().then(function(conn) {
       var ok = conn.createChannel();
   	   ok = ok.then(function(ch) {
   	   return when.all([
      	ch.assertQueue('foo'),
      	ch.assertExchange('bar'),
      	ch.bindQueue('foo', 'bar', 'baz'),
      	ch.consume('foo', handleMessage)
    	]);
  	   });
  	   return ok;
	}).then(null, console.warn);
*/