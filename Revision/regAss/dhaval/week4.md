/**
 * Authentication
- Authentication is restricting some parts of the application to only those users who identify themselves. Users identifying themselves also helps developers serve them better as it allows developers to show things relevant to them like in e-commerce applications we can know your preferences and show you products which match your preference.

- Question) What is the difference between Authentication and Authorisation ?

- Answer) Authentication has users identify themselves and after we know the identity then they may or may not be able to access certain parts of the application for e.g :- in a bank a person from home loan department may not be able to handle cashiering work or vice versa and we may also have super users which can be branch manager who may have access to all departments inside the bank and this is generally referred to as RBAC ( Role Based Access Control ) and we will look into authorisation in the next lecture.

- Question) How do we authenticate a user?

- Answer) The most common way is When a user signs up we associate a token with the user and that token is sent to the frontend and frontend then sends that token with every request that needs authentication ( or you may send it with every request ) and backend tries to find the associated user and then all actions are associated with that user.

Today we are going to accomplish this token based authentication using json web tokens

- Question) What is JSON web tokens ?

- Answer) we take the details we want the token to have in a JSON format and then encrypt it with a Secret which is stored on the server and that generates a token which is then send to the client and then when the client sends the token back we decrypt the token using the secret and then the json information is retrieved as the final result.
Oauth
- OAuth is when applications who have large user base provide their authentication system to other applications so that they can have theuir customers authenticate through this 3rd party applications like FB, Google.

- Advantage to the customer is he does not have to remember lots of passwords and if 1 application is compromised then he does not have to fear about his credentials being used on other applications that he has signed up for.

- Security provided by FB or Google is much better then a normal small scale application so customer trusts those more than our application and from developer angle we do not have to build authentication systems ourselves and can achieve kind of password less systems.
Authorization
- Authorization comes after user authenticates and Authorisation determines which pages can a signed in user access.

- This is also called as RBAC ( Role based access control ) and it helps in security also as some compromised credentials will not lead to the entire application being compromised.
Redis
- Many times in your professional career you will encounter situations where you will be serving the same static output from the database to the users and still database will be working every time to give you that answer and when working on backend, database is the biggest cause of slow performance so you should try to eliminate it by using a key value store to serve this static data which is saved as 1 key and 1 value .. So you will say great .. lets use Mongo as it is key value store but Mongo is not built for such caching needs .. Redis is built for such use cases and is in-memory and returns the data much faster than mongo so redis can be used in this case.

- Redis was not supported for Windows but I found a link on youtube which can help you setup Redis on Windows 10 [Install Redis on Windows](https://www.youtube.com/watch?v=188Fy-oCw4w).

- Redis can also be used for queuing but this is outside the scope and there are some dedicated queue providers available but I like Redis queues.
Web Sockets
- we have learnt what http requests are and we know how server and client communicate in an http scenario but in some situations this is not ideal .. for e.g :- when you are working on a messaging app then receivers client needs to fetch data from the server and to make this happen you have to have all the clients poll the server every few seconds (technically referred to as long polling ) to fetch all the data but this is bad from user experience perspective as messages are not instantaneous plus this is very taxing on the server and you can end up with very high server bills.

- So to tackle this situation we have web sockets .. Web sockets initially using http for handshake and initial connection establishment but after that the connection is upgraded to websocket and is kept open till either the browser tab is closed or server is stopped and this allows for server and client to communicate real time and client can send data to server and server can push data relevant to the client
For video references on these topics please follow the below links:- - Authentication - Oauth and Authorization - [Web Sockets](https://masai-course.s3.ap-south-1.amazonaws.com/lecture/5962/material/baeabb8ff01160eec0b5db7da2805f57/My Movie 1 - Medium.mov) - Redis - Redis one more video The video for web sockets has good concept covered which you will not find easily anywhere.
 */
