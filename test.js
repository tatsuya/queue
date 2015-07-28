'use strict';

var assert = require('assert');
var Queue = require('./');

describe('Queue', function() {
  var queue = null;

  beforeEach(function() {
    queue = new Queue();
  });

  afterEach(function() {
    queue = null;
  });

  it('should initially contain zero items', function() {
    assert.equal(queue.toArray().length, 0);
  });

  describe('#enqueue(data)', function() {
    it('should add a node to the queue', function() {
      queue.enqueue('bird');
      queue.enqueue('cat');
      queue.enqueue('dog');
      assert.equal(queue.toArray().length, 3);
    });
  });

  describe('#dequeue()', function() {
    it('should return null if the queue is empty', function() {
      assert.equal(queue.dequeue(), null);
    });

    it('should dequeue the first node of the queue with only one node', function() {
      queue.enqueue('bird');
      assert.equal(queue.toArray().length, 1);
      var bird = queue.dequeue();
      assert.equal(bird, 'bird');
      assert.equal(queue.toArray().length, 0);
    });

    it('should dequeue the first node of the queue with two nodes', function() {
      queue.enqueue('bird');
      queue.enqueue('cat');
      assert.equal(queue.toArray().length, 2);
      var bird = queue.dequeue();
      assert.equal(bird, 'bird');
      assert.equal(queue.toArray().length, 1);
      var cat = queue.dequeue();
      assert.equal(cat, 'cat');
      assert.equal(queue.toArray().length, 0);
    });
  });

  describe('#peek()', function() {
    it('should return null if the queue is empty', function() {
      assert.equal(queue.peek(), null);
    });

    it('should see the first node in the queue.', function() {
      queue.enqueue('bird');
      queue.enqueue('cat');
      queue.enqueue('dog');
      assert.equal(queue.peek(), 'bird');
    });
  });
});
