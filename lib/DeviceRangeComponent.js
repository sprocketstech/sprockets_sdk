"use strict";
var util = require('util');
var DeviceComponent = require('./DeviceComponent.js');
var ControlType = require('./ControlType.js');

/**
 * Creates a new device component which handles a value
 * @param id the id of the component
 * @param name the name of the component
 * @param min the min acceptable value
 * @param max the max acceptable value
 * @constructor
 */
var DeviceRangeComponent = function(id, name, units, min, max, deviceType, monitor) {
    DeviceComponent.call(this, id, name, ControlType.RANGE, deviceType, monitor);
    this.min = min;
    this.max = max;
    this.units = units;
};

util.inherits(DeviceRangeComponent, DeviceComponent);



module.exports = DeviceRangeComponent;