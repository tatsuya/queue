'use strict';

/**
 * Represents a queue data structure. Each instance has a head node of the
 * queue.
 *
 * @constructor
 */
var Queue = module.exports = function() {
  /**
   * First node in the queue.
   * @type {Node}
   */
  this.head = null;
};

/**
 * Enqueues the node at the last of the queue.
 *
 * @param  {[type]} data The data to initialize with node
 * @return {[type]} true if operation was success
 */
Queue.prototype.enqueue = function(data) {
  var newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return true;
  }

  // Find a last node of the queue.
  var node = this.head;
  while (node.next) {
    node = node.next;
  }
  node.next = newNode;
  return true;
};

/**
 * Dequeues the first node of the queue.
 *
 * @return {Object} the data of the dequeued node.
 */
Queue.prototype.dequeue = function() {
  if (!this.head) {
    return null;
  }

  var node = this.head;

  if (!node.next) {
    this.head = null;
    return node.data;
  }

  this.head = node.next;
  return node.data;
}

/**
 * Peeks at the first node of the queue.
 *
 * @return {Object} the data of the returned node.
 */
Queue.prototype.peek = function() {
  return this.head ? this.head.data : null;
};

/**
 * Returns an array of all the data contained in the queue.
 *
 * @return {Array} the array of all the data from the list
 */
Queue.prototype.toArray = function() {
  var array = [];
  var node = this.head;
  while (node) {
    array.push(node.data);
    node = node.next;
  }
  return array;
};

/**
 * Represents a node within a queue. Each node has a 'data' property and a
 * pointer to the next node in the queue.
 *
 * @param {Object} data The data to initialize with the node
 */
var Node = function(data) {
  this.data = data;

  /**
   * Pointer to the next node.
   * @type {Node}
   */
  this.next = null;
}