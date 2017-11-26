"use strict";
var util = require('util');
var DeviceComponent = require('./DeviceComponent.js');
var ControlType = require('./ControlType.js');

/**
 * Creates a new device component which handles a value
 * @param id the id of the component
 * @param name the name of the component
 * @constructor
 */
var DeviceValueComponent = function(id, name, units, deviceType, monitor) {
    DeviceComponent.call(this, id, name, ControlType.VALUE, deviceType, monitor);
    this.units = units;
};

util.inherits(DeviceValueComponent, DeviceComponent);

/*
DeviceValueComponent.prototype.name = function() {
    return this._name;
};*/



module.exports = DeviceValueComponent;