<h1 align="center"> The What, Why and How of RabbitMQ</h1>

<div align="center">
    <img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/1_UnYL-2r54_7AnEwQv0cVxA.png" alt="RabbitMQ Tutorial" width="400" height="150"/>
</div>


## What is this?
> You can never understand everything but you should push yourself to understand the system.<br/>
> *-Ryan Dahl (creator of Node.JS)*

This repository aims to explain the 'WHAT', 'WHY' and 'HOW' of RabbitMQ and MicroServices in a simplifieid manner.

## Table of Contents
1. A bit of History!
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

### A bit of history!
<div align="center">
<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/history.jpg" alt="RabbitMQ Tutorial" width="450" height="200"/>
</div>
Coupling and Cohesion are two fundamental principle in a software design architecture. High Cohesion and low coupling is the expectation. During pre-microservices era, we had SOA which aimed to decrease coupling but in time they were no good. Traditional SOA allows you to make changes to individual components but they must be carefully crafted. It doesn't give you freedom to develop services independently.

### What is a Microservice?
<div align="center">
<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/microservice.png" alt="RabbitMQ Tutorial" width="650" height="300"/>
</br>
</div>
When you think about microservice think about loose coupling. It is a method of developing software applications as a suite of independently deployable small modular services in which each service runs a unique process and communicates through a well defined light weight mechanism. These services can be synchronus and asynchronous. One thing you should understand is it is not a silver bullet. It has its own drawback in terms of complexity of testing and deployments.

### What is RabbitMQ?
<div align="center">
<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/exchnage_main.png" alt="RabbitMQ Tutorial" width="270" height="300"/>
</br>
</div>
<h4> Fundamentals() </h4>
RabbitMQ is an open source messaging system that allows you to integrate applications together using exchanges and queues. Simply put, it is a software where queues can be defined, applications may connect to the queue and transfer a message onto it.
A message can include any kind of information. It could, for example, have information about a process/task that should start on another application (that could be on another server), or it could be just a simple text message. 
It is developed in erlang programming language. Also note that RabbitMQ is built on AMQP protocol.
<h4> When and Why should you use RabbitMQ </h4>
RabbitMQ allows you to scale applications easily. You can develop microservices in different languages, and without knowing whole product schematic. 
The consumer can take a message of the queue and start the processing at the same time as the producer is queueing up new messages on the queue. The consumer can be on a totally different server than the publisher, or they can be located on the same server. The request can be created in one programming language and handled in another programming language - the two applications will only communicate through the messages they are sending to each other. Due to that, the two applications will have a low coupling between the sender and the receiver.
<h4> Message Flow in RabbitMQ </h4>
<ul>
	<li>Producer, exchange and consumer make up the flow. </li>
	<li>The producer publishes a message to the exchange. </li>
	<li>The exchange receives the message and is now responsible for the routing of the message.</li>
<li>A binding has to be set up between the queue and the exchange. In this case, we have bindings to two different queues from the exchange.</li>
	<li>The exchange routes the message in to the queues.</li>
	<li>The messages stay in the queue until they are handled by a consumer.</li>
<li>The consumer handles the message.</li>
	</ul>
<h4> Setup RabbitMQ </h4>
Follow the instructions given here: https://www.rabbitmq.com/download.html

### Using RabbitMQ with Node(AMQPLIB library)
<h4> A simple program </h4>
*Refer code of send.js and recive.js for a detailed explanation.*
<h4> All About Exchanges </h4>
Exchanges are message routing agents, defined per virtual host within RabbitMQ. An exchange is responsible for the routing of the messages to the different queues. An exchange accepts messages from the producer application and routes them to message queues with help of header attributes, bindings, and routing keys.
A binding is a "link" that you set up to bind a queue to an exchange.
The routing key is a message attribute. The exchange might look at this key when deciding how to route the message to queues (depending on exchange type).
There are  4 types of exchange
<h5>i.  Direct Exchange</h5>
<div align="center">
<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/direct-exchange.png" alt="RabbitMQ Tutorial" width="270" height="300"/>
<br>
</div>
A direct exchange delivers messages to queues based on a message routing key. The routing key is a message attribute added into the message header by the producer. The routing key can be seen as an "address" that the exchange is using to decide how to route the message. A message goes to the queue(s) whose binding key exactly matches the routing key of the message.<br>
<h5>ii. Fanout Exchange (Broadcasting)</h5>
<div align="center">
<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/fanout-exchange.png" alt="RabbitMQ Tutorial" width="270" height="300"/>
<br/>
</div>
The fanout copies and routes a received message to all queues that are bound to it regardless of routing keys or pattern matching as with direct and topic exchanges. Keys provided will simply be ignored.<br>
<h5>iii.Topic Exchange</h5>
<div align="center">
<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/topic-exchange%20(1).png" alt="RabbitMQ Tutorial" width="270" height="300"/>
<br>
</div>
Topic exchanges route messages to queues based on wildcard matches between the routing key and something called the routing pattern specified by the queue binding. Messages are routed to one or many queues based on a matching between a message routing key and this pattern. <br>
<h5>iv. Header Exchange</h5>
<div align="center">
<img src="https://github.com/Shwetabh1/Of-Microservices-and-RabbitMQ/blob/master/images/headers-exchange.png" alt="RabbitMQ Tutorial" width="270" height="300"/>
<br>
</div>
Headers exchanges route based on arguments containing headers and optional values. Headers exchanges are very similar to topic exchanges, but it routes based on header values instead of routing keys. A message is considered matching if the value of the header equals the value specified upon binding.

### Keywords.
<ul>
	<li><b>Producer:</b> Application that sends the messages.</li>
	<li><b>Consumer:</b> Application that receives the messages.</li>
	<li><b>Queue:</b> Buffer that stores messages.</li>
	<li><b>Message:</b> Information that is sent from the producer to a consumer through RabbitMQ.</li>
	<li><b>Connection:</b> A connection is a TCP connection between your application and the RabbitMQ broker.</li>
	<li><b>Channel:</b> A channel is a virtual connection inside a connection. When you are publishing or consuming messages from a queue - it's all done over a channel.</li>
	<li><b>Exchange:</b> Receives messages from producers and pushes them to queues depending on rules defined by the exchange type. To receive messages, a queue needs to be bound to at least one exchange.</li>
	<li><b>Binding:</b> A binding is a link between a queue and an exchange.</li>
	<li><b>Routing key:</b> The routing key is a key that the exchange looks at to decide how to route the message to queues. The routing key is like an address for the message.</li>
	<li><b>AMQP:</b>AMQP (Advanced Message Queuing Protocol) is the protocol used by RabbitMQ for messaging.</li>
	<li><b>Users:</b> It is possible to connect to RabbitMQ with a given username and password. Every user can be assigned permissions such as rights to read, write and configure privileges within the instance. Users can also be assigned permissions to specific virtual hosts.</li>
	<li><b>Vhost, virtual host:</b> A Virtual host provides a way to segregate applications using the same RabbitMQ instance. 	Different users can have different access privileges to different vhost and queues and exchanges can be created, so they only exist in one vho</li>
</ul>

<h3> Useful Links.</h3>

* https://gist.github.com/samwize/8877226
* https://www.youtube.com/watch?v=MLTRHc5dk6s
* https://gist.github.com/soheilhy/867f76feea7cab4f8a84
* https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
* https://www.squaremobius.net/amqp.node/channel_api.html


