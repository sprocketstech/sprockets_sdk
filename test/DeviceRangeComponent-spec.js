var sdk = require('..');

describe('DeviceRangeComponent', function() {

    it('should set the type to range', function() {
        var obj = new sdk.Devices.DeviceRangeComponent('id', 'name', sdk.ValueType.TEMPERATURE, 5, 100);
        expect(obj.controlType).toBe(sdk.ControlType.RANGE);
    });

    it('should set the name', function() {
        var obj = new sdk.Devices.DeviceRangeComponent('id', 'name', sdk.ValueType.TEMPERATURE, 5, 100);
        expect(obj.name).toBe('name');
    });

    it('should set the id', function() {
        var obj = new sdk.Devices.DeviceRangeComponent('id', 'name', sdk.ValueType.TEMPERATURE, 5, 100);
        expect(obj.id).toBe('id');
    });


    it('should set the min value', function() {
        var obj = new sdk.Devices.DeviceRangeComponent('id', 'name', sdk.ValueType.TEMPERATURE, 5, 100);
        expect(obj.min).toBe(5);
    });


    it('should set the max value', function() {
        var obj = new sdk.Devices.DeviceRangeComponent('id', 'name', sdk.ValueType.TEMPERATURE, 5, 100);
        expect(obj.max).toBe(100);
    });
});


