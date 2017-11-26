"use strict";


/**
 * Creates a new device component (DeviceComponent is abstract)
 * @param id the id of the component
 * @param name the name of the component
 * @constructor
 */
var DeviceComponent = function(id, name, controlType, deviceType, monitor) {
    this.id = id;
    this.name = name;
    this.controlType = controlType;
    this.deviceType = deviceType;
    if (typeof monitor !== 'undefined') {
        this.monitor = monitor;
    } else {
        this.monitor = true;
    }
    
};

DeviceComponent.prototype.setName = function(name) {
    this._name = name;
};

module.exports = DeviceComponent;