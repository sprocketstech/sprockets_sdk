"use strict";
/**
 * Creates a new abstract device instance
 * @param id the id of the instance
 * @constructor
 */
var DeviceWidget = function(id, title, description, ui, controllerName) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.ui = ui;
    this.controllerName = controllerName;

};

module.exports = DeviceWidget;