"use strict";
var util = require('util');

/**
 * Creates a new device plugin with the given name.
 * @param name the name of the plugin
 * @constructor
 */
var DevicePlugin = function(name) {
    this._name = name;
    this._setupParameters = [];
    this._uiModule = null;
    this._uiModuleFiles = null;
};

/**
 * Gets the name of the plugin
 * @returns {string}
 */
DevicePlugin.prototype.name = function() {
    return this._name;
};

/**
 * Adds a setup parameter
 * @param name the name of the parameter
 * @param label the label to show the user
 * @param required whether the value is required
 * @param type the type of the value (see ValueType)
 */
DevicePlugin.prototype.addSetupParameter = function(name, label, required, type, values) {
    var param = {
        name: name,
        label: label,
        required: required,
        type: type,
        values: values
    };
    this._setupParameters.push(param);
    return param;
};

/**
 * Sets the uiModule to use for the plugin.  The name parameter must be defined as a angular module in the given file name
 * @param name the name of the module to use for the plugin
 * @param moduleFileName filename relative to the plugin which defines the module
 */
DevicePlugin.prototype.setUIModule = function(name, moduleFileName) {
    this._uiModule = name;
    if (!this._uiModuleFiles) {
        this._uiModuleFiles = {};
    }
    this._uiModuleFiles.module = moduleFileName;
};

/**
 * Sets an overriden configuration screen for the plugin.
 * the filename should be relative to the plugin index.js and should contain
 * an HTML snippet to use
 * @param fileName the file to use for configuration.
 */
DevicePlugin.prototype.setUIConfigHTML = function(fileName) {
    if (!this._uiModuleFiles) {
        this._uiModuleFiles = {};
    }
    this._uiModuleFiles.config = fileName;
};

/**
 * Sets an overriden card screen for the plugin.
 * the filename should be relative to the plugin index.js and should contain
 * an HTML snippet to use
 * @param fileName the file to use for configuration.
 */
DevicePlugin.prototype.setUICardHTML = function(fileName) {
    if (!this._uiModuleFiles) {
        this._uiModuleFiles = {};
    }
    this._uiModuleFiles.card = fileName;
};


DevicePlugin.prototype.addUIDependency = function(mimeType, fileName) {
    if (!this._uiModuleFiles) {
        this._uiModuleFiles = {};
    }
    if (!this._uiModuleFiles.dependencies) {
        this._uiModuleFiles.dependencies = [];
    }
    this._uiModuleFiles.dependencies.push({mimeType: mimeType, fileName: fileName});
};

/**
 * Adds a dashboard widget for the plugin.
 *
 * @param width an instance of DeviceWidget
 */
DevicePlugin.prototype.addWidget = function(widget) {
    if (!this._uiModuleWidgets) {
        this._uiModuleWidgets = [];
    }
    this._uiModuleWidgets.push(widget);
};



/* API */
DevicePlugin.prototype.validate = function(config, callback) {
    callback({
        valid: true,
        errors: []
    });
};

DevicePlugin.prototype.loadConfig = function(config, callback) {
    callback({});
};


DevicePlugin.prototype.metadata = function() {
    return {
        setup: this._setupParameters
    };
};


DevicePlugin.prototype.uiModule = function() {
    return this._uiModule;
};

DevicePlugin.prototype.uiFiles = function() {
    return this._uiModuleFiles;
};

DevicePlugin.prototype.uiWidgets = function() {
    return this._uiModuleWidgets;
};





DevicePlugin.prototype.createInstance = function(id, config, services) {
    throw new Error('Device Plugin ' + this._name + ' did not override createInstance.  This is required for proper plugin operation');
};
module.exports = DevicePlugin;