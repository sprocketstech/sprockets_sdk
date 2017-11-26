var sdk = require('..');

describe('DeviceBooleanComponent', function() {

    it('should set the type to boolean', function() {
        var bool = new sdk.Devices.DeviceBooleanComponent('id', 'name');
        expect(bool.controlType).toBe(sdk.ControlType.BOOLEAN);
    });

    it('should set the name', function() {
        var bool = new sdk.Devices.DeviceBooleanComponent('id', 'name');
        expect(bool.name).toBe('name');
    });

    it('should set the id', function() {
        var bool = new sdk.Devices.DeviceBooleanComponent('id', 'name');
        expect(bool.id).toBe('id');
    });
});


