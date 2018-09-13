<h1 align="center"> The What, Why and How of RabbitMQ</h1>

<div align="center">
    <img src="https://github.com/Shwetabh1/Mocha-Tutorial/blob/master/Images/mocha_final.png" alt="RabbitMQ Tutorial" width="418" height="332"/>
  <br>
</div>


## What is this?
> You can never understand everything but you should push yourself to understand the system.<br/>
> *-Ryan Dahl (creator of Node.JS)*

This repository aims to explain the 'WHAT', 'WHY' and 'HOW' of RabbitMQ and MicroServices in a simplifieid manner.

## Table of Contents
1. A bit of a History?
1. What is Microservice?
1. What is RabbitMQ?
	1. Fundamentals
	1. AMQP
	1. When and why should you use RabbitMQ?
	1. Message flow in RabbitMQ
	1. Setting up RabbitMQ
1. Using AMQPLIB library
	1. A simple program
	1. All about exchanges
	1. A Complex Program
1. Keywords
1. Useful Links.

### A bit of a history?
Coupling and Cohesion are two fundamental principle in a software design architecture. High Cohesion and low coupling is the expectation. Pre-microservices era we had SOA which aimed to decrease coupling but in time they were no good. Traditional SOA allows you to make changes to individual components but they must be carefully crafted. In 2010 the word Microservices are coined.
### What is Microservice?
When you think about microservice think about loose coupling. It is a method of developing software applications as a suite of independently deployable small modular services in which each service runs a unique process and communicates through a well defined light weight mechanism. These services can be synchronus and asynchronous. One thing you should understand is it is not a silver bullet. It has its own drawback in terms of complexity of testing and deployments.
### What is RabbitMQ?
	#### Fundamentals()
	RabbitMQ is an open source messaging system that allows you to integrate applications together using exchanges and queues. Simply put It is a software where queues can be defined, applications may connect to the queue and transfer a message onto it.
	A message can include any kind of information. It could, for example, have information about a process/task that should start on another application (that could be on another server), or it could be just a simple text message. 
	Underneath it implements AMQP protocol. It is developed in erlang programming language.
	#### When and Why should you use RabbitMQ 
	The consumer can take a message of the queue and start the processing of the PDF at the same time as the producer is queueing up new messages on the queue. The consumer can be on a totally different server than the publisher, or they can be located on the same server. The request can be created in one programming language and handled in another programming language - the two applications will only communicate through the messages they are sending to each other. Due to that, the two applications will have a low coupling between the sender and the receiver.
	#### `before()` and `beforeEach()`
	They are also called as **hooks**. They are used to set preconditions.
	`before()` is run before all it/describe. `beforeEach` is run before every it.
	#### `after()` and `afterEach()`
	They are also called **hooks** and are used to clean up after test cases.
	#### only() 
	It ensures only the test cases in only block is executing.
	**NOTE** _Also see `basic-test.js` above for example on each._
### `assert()`
_Explained via code in `assert-test-example.js`_
### `should()`
_Explained via code in `should-test-example.js`_
### Exchanges
_Explained via code in `expect-test-example.js`_
### Keywords.
Producer: Application that sends the messages.
Consumer: Application that receives the messages.
Queue: Buffer that stores messages.
Message: Information that is sent from the producer to a consumer through RabbitMQ.
Connection: A connection is a TCP connection between your application and the RabbitMQ broker.
Channel: A channel is a virtual connection inside a connection. When you are publishing or consuming messages from a queue - it's all done over a channel.
Exchange: Receives messages from producers and pushes them to queues depending on rules defined by the exchange type. To receive messages, a queue needs to be bound to at least one exchange.
Binding: A binding is a link between a queue and an exchange.
Routing key: The routing key is a key that the exchange looks at to decide how to route the message to queues. The routing key is like an address for the message.
AMQP: AMQP (Advanced Message Queuing Protocol) is the protocol used by RabbitMQ for messaging.
Users: It is possible to connect to RabbitMQ with a given username and password. Every user can be assigned permissions such as rights to read, write and configure privileges within the instance. Users can also be assigned permissions to specific virtual hosts.
Vhost, virtual host: A Virtual host provides a way to segregate applications using the same RabbitMQ instance. Different users can have different access privileges to different vhost and queues and exchanges can be created, so they only exist in one vho
### Useful Links.
* https://gist.github.com/samwize/8877226
* https://www.youtube.com/watch?v=MLTRHc5dk6s
* https://gist.github.com/soheilhy/867f76feea7cab4f8a84
* https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
* https://www.squaremobius.net/amqp.node/channel_api.html

