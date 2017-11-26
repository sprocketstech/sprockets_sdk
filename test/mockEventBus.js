"use strict";

var EventEmitter = require('events');
var util = require('util');
var EventBus = function() {
};
util.inherits(EventBus, EventEmitter);

var eventBus = new EventBus();

var service = {};

service._subscribeCallbacks = {};
service._subscribed = {};

/**
 * Subscribe to the given message; callback will be called when data is available
 * @param messageName
 * @param callback
 */
service.subscribe = function(messageName, callback) {
    eventBus.on(messageName, callback);
    if (service._subscribeCallbacks.hasOwnProperty(messageName)) {
        service._subscribeCallbacks[messageName](callback);
    }
    if (!service._subscribed[messageName]) {
        service._subscribed[messageName] = [];
    }
    var newHandle = {
        messageName: messageName,
        callback: callback
    };

    service._subscribed[messageName].push(newHandle);
    return (function(unsub) {
        return function() {
            eventBus.removeListener(unsub.messageName, unsub.callback);
            var index = service._subscribed[messageName].indexOf(unsub);
            service._subscribed[messageName].splice(index, 1);
        };
    }(newHandle));
};

/**
 * Publish the given data to the message bus.
 * @param messageName
 * @param data
 */
service.publish = function(messageName, data) {
    try {
        eventBus.emit(messageName, data);
    }
    catch (err) {
        eventBus.emit('error.unhandled', {message: 'Error emitting message ' + messageName + ': ' + err.message, stack: err.stack});
    }
};

service.onSubscribe = function(messageName, callback) {
    service._subscribeCallbacks[messageName] = callback;
    //if any are already subscribed, call them now
    if (service._subscribed.hasOwnProperty(messageName)) {
        for (var i=0; i < service._subscribed[messageName].length; ++i) {
            callback(service._subscribed[messageName][i].callback);
        }
    }
};

module.exports = service;