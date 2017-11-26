var sdk = require('..');

describe('DeviceValueComponent', function() {

    it('should set the type to value', function() {
        var bool = new sdk.Devices.DeviceValueComponent('id', 'name');
        expect(bool.controlType).toBe(sdk.ControlType.VALUE);
    });

    it('should set the name', function() {
        var bool = new sdk.Devices.DeviceValueComponent('id', 'name');
        expect(bool.name).toBe('name');
    });

    it('should set the id', function() {
        var bool = new sdk.Devices.DeviceValueComponent('id', 'name');
        expect(bool.id).toBe('id');
    });
});


