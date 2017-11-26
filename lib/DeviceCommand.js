"use strict";


/**
 * Creates a new device command
 * @param id the id of the command
 * @param name the name of the command
 * @constructor
 */
var DeviceCommand = function(id, name) {
    this.id = id;
    this.name = name;
};

DeviceCommand.prototype.setName = function(name) {
    this._name = name;
};

module.exports = DeviceCommand;