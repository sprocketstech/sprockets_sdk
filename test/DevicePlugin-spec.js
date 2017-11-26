var sdk = require('..');

describe('DevicePlugin', function() {

    it('should set the name', function() {
        var obj = new sdk.Devices.DevicePlugin('name');
        expect(obj.name()).toBe('name');
    });

    it('should allow setup parameters to be added', function() {
        var obj = new sdk.Devices.DevicePlugin('name');
        obj.addSetupParameter('parm1', 'Parameter 1', true, sdk.ValueType.VOLTAGE);
        expect(obj.metadata().setup.length).toBe(1);
        expect(obj.metadata().setup[0].name).toBe('parm1');
        expect(obj.metadata().setup[0].label).toBe('Parameter 1');
        expect(obj.metadata().setup[0].required).toBe(true);
        expect(obj.metadata().setup[0].type).toBe(sdk.ValueType.VOLTAGE);
    });

    it('should default ui module to null', function() {
        var obj = new sdk.Devices.DevicePlugin('name');
        expect(obj.uiModule()).toBe(null);
    });

    it('should default ui files to null', function() {
        var obj = new sdk.Devices.DevicePlugin('name');
        expect(obj.uiFiles()).toBe(null);
    });

    it('should return ui module if set', function() {
        var obj = new sdk.Devices.DevicePlugin('name');
        obj.setUIModule('mymodule', 'mymodule.js');
        expect(obj.uiModule()).toBe('mymodule');
        expect(obj.uiFiles().module).toBe('mymodule.js');
    });

    it('should allow override of the config screen', function() {
        var obj = new sdk.Devices.DevicePlugin('name');
        obj.setUIModule('mymodule', 'mymodule.js');
        obj.setUIConfigHTML('test.html');
        expect(obj.uiModule()).toBe('mymodule');
        expect(obj.uiFiles().config).toBe('test.html');
    });
});


