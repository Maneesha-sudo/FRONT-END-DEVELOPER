# Node.js Architecture

Node.js is a runtime environment that allows us to run JavaScript outside the browser. It builds fast and scalable server-side applications and it is designed to handle multiple tasks efficiently using asynchronous.

## JavaScript Engine (V8)

* V8 is the JavaScript engine developed by Google and converts it into machine code which helps the code run very fast.

## Node.js Core APIs

* Core APIs are built-in features provided by Node.js.
* Examples include file system, HTTP server, path handling, and OS-related operations.
* These APIs help JavaScript interact with the operating system.

## Native Bindings

* Native bindings act as a connection between JavaScript and C/C++ code.

## Event Loop

* The event loop is the main mechanism that handles asynchronous tasks in Node.js and knows pending tasks to execute.
* It allows Node.js to handle many operations using a single main thread.

## libuv

### What is libuv?

* libuv is a library written in C.
* It is used by Node.js to handle asynchronous operations.
### Why Node.js needs libuv

* JavaScript cannot directly handle system-level tasks.
* libuv provides support for non-blocking I/O operations.

### Responsibilities of libuv

* Managing the event loop
* Handling asynchronous  operations
* Providing cross-platform support

## Thread Pool

### What is a thread pool?

* A thread pool is a set of background threadsw which used to perform tasks that take more time.

### Why Node.js uses a thread pool

* Some tasks can block the main thread if executed directly.By using thread pool which helps the app responsive.

### Operations handled by the thread pool

* File system operations
* DNS lookups

## Worker Threads

### What are worker threads?

* Worker threads allow JavaScript code to run in parallel.

### Why are worker threads needed?

* JavaScript runs on a single thread by default.
* Heavy computations can slow down the application.
* Worker threads help move heavy tasks away from the main thread.

### Difference between thread pool and worker threads

* Thread pool is managed automatically by Node.js.
* Worker threads are created manually by the developer.
* Thread pool is mainly used for I/O tasks.
* Worker threads are mainly used for CPU-heavy tasks.

## Event Loop Queues

### Macro Task Queue

* This queue holds tasks that are scheduled to run later.
* Examples include:

  * setTimeout
  * setInterval
  * I/O callbacks

### Micro Task Queue

* This queue holds tasks that should run immediately.
* Examples include:

  * Promise.then()
  * queueMicrotask()

### Execution Priority

* Micro tasks are executed before macro tasks.
* After each task, the micro task queue is cleared first.

### Example

* If both a promise and a timer are present:

  * The promise executes first
  * The timer executes after

