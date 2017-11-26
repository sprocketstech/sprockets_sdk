"use strict";
var util = require('util');
var DeviceComponent = require('./DeviceComponent.js');
var ControlType = require('./ControlType.js');

/**
 * Creates a new device component which handles a value
 * @param id the id of the component
 * @param name the name of the component
 * @param values the acceptable values (array)
 * @constructor
 */
var DeviceSelectionComponent = function(id, name, values, deviceType, monitor) {
    DeviceComponent.call(this, id, name, ControlType.SELECTION, deviceType, monitor);
    this.values = values;
};

util.inherits(DeviceSelectionComponent, DeviceComponent);



module.exports = DeviceSelectionComponent;