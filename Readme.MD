<h1 align="center"> The What, Why and How of RabbitMQ</h1>

<div align="center">
    <img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/1_UnYL-2r54_7AnEwQv0cVxA.png" alt="RabbitMQ Tutorial" width="550" height="200"/>
  <br>
</div>


## What is this?
> You can never understand everything but you should push yourself to understand the system.<br/>
> *-Ryan Dahl (creator of Node.JS)*

This repository aims to explain the 'WHAT', 'WHY' and 'HOW' of RabbitMQ and MicroServices in a simplifieid manner.

## Table of Contents
1. A bit of a History!
1. What is a Microservice?
1. What is RabbitMQ?
	1. Fundamentals.
	1. When and why should you use RabbitMQ?
	1. Message flow in RabbitMQ.
	1. Setting up RabbitMQ.
1. Using RabbitMQ with Node(AMQPLIB library)
	1. A simple program.
	1. All about Exchanges.
1. Keywords.
1. Useful Links.

### A bit of a history?
<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/history.jpg" alt="RabbitMQ Tutorial"/>
Coupling and Cohesion are two fundamental principle in a software design architecture. High Cohesion and low coupling is the expectation. During pre-microservices era, we had SOA which aimed to decrease coupling but in time they were no good. Traditional SOA allows you to make changes to individual components but they must be carefully crafted. It doesn't give you freedom to develop services independently.
### What is Microservice?
<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/microservice.png" alt="RabbitMQ Tutorial"/>
When you think about microservice think about loose coupling. It is a method of developing software applications as a suite of independently deployable small modular services in which each service runs a unique process and communicates through a well defined light weight mechanism. These services can be synchronus and asynchronous. One thing you should understand is it is not a silver bullet. It has its own drawback in terms of complexity of testing and deployments.
### What is RabbitMQ?
	#### Fundamentals()
	<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/exchange-main.png" alt="RabbitMQ Tutorial"/>
	RabbitMQ is an open source messaging system that allows you to integrate applications together using exchanges and queues. Simply put, it is a software where queues can be defined, applications may connect to the queue and transfer a message onto it.
	A message can include any kind of information. It could, for example, have information about a process/task that should start on another application (that could be on another server), or it could be just a simple text message. 
	It is developed in erlang programming language. Also note that RabbitMQ is built on AMQP protocol.
	#### When and Why should you use RabbitMQ
	RabbitMQ allows you to scale applications easily. You can develop microservices in different languages, and without knowing whole product schematic. 
	The consumer can take a message of the queue and start the processing at the same time as the producer is queueing up new messages on the queue. The consumer can be on a totally different server than the publisher, or they can be located on the same server. The request can be created in one programming language and handled in another programming language - the two applications will only communicate through the messages they are sending to each other. Due to that, the two applications will have a low coupling between the sender and the receiver.
	#### Message Flow in RabbitMQ
	Producer, exchange and consumer make up the flow.
	The producer publishes a message to the exchange. <br>
	The exchange receives the message and is now responsible for the routing of the message. <br>
	A binding has to be set up between the queue and the exchange. In this case, we have bindings to two different queues from the exchange. The exchange routes the message in to the queues.
	The messages stay in the queue until they are handled by a consumer. <br>
	The consumer handles the message.
	#### Message Flow in RabbitMQ
	Follow the instructions given here: https://www.rabbitmq.com/download.html
### Using RabbitMQ with Node(AMQPLIB library)
	#### A simple program
	_Refer code of send.js and recive.js for a detailed explanation_
	#### All About Exchanges
	Exchanges are message routing agents, defined per virtual host within RabbitMQ. An exchange is responsible for the routing of the messages to the different queues. An exchange accepts messages from the producer application and routes them to message queues with help of header attributes, bindings, and routing keys.
	A binding is a "link" that you set up to bind a queue to an exchange.
	The routing key is a message attribute. The exchange might look at this key when deciding how to route the message to queues (depending on exchange type).
	There are  4 types of exchange
	i.  Direct Exchange
	<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/microservice.png" alt="RabbitMQ Tutorial"/>
	A direct exchange delivers messages to queues based on a message routing key. The routing key is a message attribute added into the message header by the producer. The routing key can be seen as an "address" that the exchange is using to decide how to route the message. A message goes to the queue(s) whose binding key exactly matches the routing key of the message.
	ii. Fanout Exchange (Broadcasting)
	<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/microservice.png" alt="RabbitMQ Tutorial"/>
	The fanout copies and routes a received message to all queues that are bound to it regardless of routing keys or pattern matching as with direct and topic exchanges. Keys provided will simply be ignored.
	iii.Topic Exchange
	<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/microservice.png" alt="RabbitMQ Tutorial"/>
	Topic exchanges route messages to queues based on wildcard matches between the routing key and something called the routing pattern specified by the queue binding. Messages are routed to one or many queues based on a matching between a message routing key and this pattern.
	iv. Header Exchange
	<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/microservice.png" alt="RabbitMQ Tutorial"/>
	Headers exchanges route based on arguments containing headers and optional values. Headers exchanges are very similar to topic exchanges, but it routes based on header values instead of routing keys. A message is considered matching if the value of the header equals the value specified upon binding.

### Keywords.
####Producer: Application that sends the messages.
####Consumer: Application that receives the messages.
####Queue: Buffer that stores messages.
####Message: Information that is sent from the producer to a consumer through RabbitMQ.
####Connection: A connection is a TCP connection between your application and the RabbitMQ broker.
####Channel: A channel is a virtual connection inside a connection. When you are publishing or consuming messages from a queue - it's all done over a channel.
####Exchange: Receives messages from producers and pushes them to queues depending on rules defined by the exchange type. To receive messages, a queue needs to be bound to at least one exchange.
####Binding: A binding is a link between a queue and an exchange.
####Routing key: The routing key is a key that the exchange looks at to decide how to route the message to queues. The routing key is like an address for the message.
####AMQP: AMQP (Advanced Message Queuing Protocol) is the protocol used by RabbitMQ for messaging.
####Users: It is possible to connect to RabbitMQ with a given username and password. Every user can be assigned permissions such as rights to read, write and configure privileges within the instance. Users can also be assigned permissions to specific virtual hosts.
Vhost, virtual host: A Virtual host provides a way to segregate applications using the same RabbitMQ instance. Different users can have different access privileges to different vhost and queues and exchanges can be created, so they only exist in one vho
### Useful Links.
* https://gist.github.com/samwize/8877226
* https://www.youtube.com/watch?v=MLTRHc5dk6s
* https://gist.github.com/soheilhy/867f76feea7cab4f8a84
* https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
* https://www.squaremobius.net/amqp.node/channel_api.html


