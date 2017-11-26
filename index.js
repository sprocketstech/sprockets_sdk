"use strict";
var ControlType = require('./lib/ControlType.js');
var DeviceType = require('./lib/DeviceType.js');
var ValueType = require('./lib/ValueType.js');
var DevicePlugin = require('./lib/DevicePlugin.js');

var DeviceInstance = require('./lib/DeviceInstance.js');
var DeviceValueComponent = require('./lib/DeviceValueComponent.js');
var DeviceBooleanComponent = require('./lib/DeviceBooleanComponent.js');
var DeviceRangeComponent = require('./lib/DeviceRangeComponent.js');
var DeviceSelectionComponent = require('./lib/DeviceSelectionComponent.js');
var DeviceCommand = require('./lib/DeviceCommand.js');
var DeviceWidget = require('./lib/DeviceWidget.js');

module.exports = {
    ControlType: ControlType,
    DeviceType: DeviceType,
    ValueType: ValueType,
    Devices: {
        DevicePlugin: DevicePlugin,
        DeviceValueComponent: DeviceValueComponent,
        DeviceBooleanComponent: DeviceBooleanComponent,
        DeviceRangeComponent: DeviceRangeComponent,
        DeviceSelectionComponent: DeviceSelectionComponent,
        DeviceInstance: DeviceInstance,
        DeviceCommand: DeviceCommand,
        Widget: DeviceWidget
    }

};

