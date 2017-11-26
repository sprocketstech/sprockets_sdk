"use strict";
/**
 * Creates a new abstract device instance
 * @param id the id of the instance
 * @constructor
 */
var DeviceInstance = function(id) {
    //NOTE: eventBus will be set by the device handler
    //after the instance is created; but before start() is called.
    //this is not ideal, but done in order to remove any dependencies
    //from the SDK...
    this.eventBus = null;
    this.id = id;
    this._metadata = {
        sensors: {},
        controls: {},
        commands: {}
    };
    this._values = {
        sensors: {},
        controls: {}
    };
};

/**
 * Add a sensor to the device instance.
 * @param sensor an object of type DeviceComponent
 */
DeviceInstance.prototype.addSensor= function(sensor) {
    this._metadata.sensors[sensor.id] = sensor;
    this._values.sensors[sensor.id] = {
        name: sensor.name
    };
};

/**
 * Add a control to the device instance.
 * @param sensor an object of type DeviceComponent
 */
DeviceInstance.prototype.addControl = function(control) {
    this._metadata.controls[control.id] = control;
    this._values.controls[control.id] = {
        name: control.name
    };
};

/**
 * Add a command to the device instance.
 * @param command an object of type DeviceCommand
 */
DeviceInstance.prototype.addCommand = function(command) {
    this._metadata.commands[command.id] = command;

};


/**
 * Retrieve the current component values
 */
DeviceInstance.prototype.getComponentValues = function() {
    return this._values;
};

/**
 * Updates a sensor value
 * @param id the id of the sensor
 * @param newVal the new value of the sensor
 */
DeviceInstance.prototype.updateSensorValue = function(id, newVal) {
    this._values.sensors[id].value = newVal;
    //emit a new data value
    this.eventBus.publish('device.sensor.value', {
        device: this.id,
        component: id,
        controlType: this._metadata.sensors[id].controlType,
        value: newVal,
        monitor: this._metadata.sensors[id].monitor
    });
    
};

/**
 * Updates a control value
 * @param id the id of the sensor
 * @param newVal the new value of the sensor
 */
DeviceInstance.prototype.updateControlValue = function(id, newVal) {
    var oldVal = this._values.controls[id].value;
    this._values.controls[id].value = newVal;
    //emit a new data value
    if (oldVal !== newVal) {
        this.eventBus.publish('device.control.value', {
            device: this.id,
            component: id,
            controlType: this._metadata.controls[id].controlType,
            value: newVal
        });
    }
};

/*API*/
DeviceInstance.prototype.componentMetadata = function() {
    return this._metadata;
};

DeviceInstance.prototype.start = function() {
    throw new Error('Device Instance ' + this._id + ' did not override start.  This is required for proper plugin operation');
};

DeviceInstance.prototype.shutdown = function() {
    throw new Error('Device Instance ' + this._id + ' did not override shutdown.  This is required for proper plugin operation');
};


DeviceInstance.prototype.setComponentValues = function(newVals) {
    throw new Error('Device Instance ' + this._id + ' did not override getComponentValues.  This is required for proper plugin operation');
};

DeviceInstance.prototype.invokeCommand = function(commandId) {
    throw new Error('Device Instance ' + this._id + ' did not override invokeCommand.  This is required for proper plugin operation');
};

module.exports = DeviceInstance;