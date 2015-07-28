# queue

Queue data structure implemented in Node.

## Usage

```js
var Queue = require('./');

// Instantiate queue object
var queue = new Queue();

queue.enqueue('bird');
queue.enqueue('cat');
queue.enqueue('dog');

queue.dequeue()  // 'bird'
queue.dequeue()  // 'cat'
queue.dequeue()  // 'dog'
```

## API

### Queue#enqueue(data)

Enqueues the node at the last of the queue.

### Queue#dequeue()

Dequeues the first node of the queue.

### Queue#peek()

See the first node of the queue.

## See also

- [janogonzalez/queuejs](https://github.com/janogonzalez/queuejs)
- [jasonsjones/queue-fifo](https://github.com/jasonsjones/queue-fifo)
