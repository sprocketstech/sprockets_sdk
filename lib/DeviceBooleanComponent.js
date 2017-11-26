"use strict";
var util = require('util');
var DeviceComponent = require('./DeviceComponent.js');
var ControlType = require('./ControlType.js');

/**
 * Creates a new device component which handles an on/off value
 * @param id the id of the component
 * @param name the name of the component
 * @constructor
 */
var DeviceBooleanComponent = function(id, name, deviceType, monitor) {
    DeviceComponent.call(this, id, name, ControlType.BOOLEAN, deviceType, monitor);
};

util.inherits(DeviceBooleanComponent, DeviceComponent);



module.exports = DeviceBooleanComponent;