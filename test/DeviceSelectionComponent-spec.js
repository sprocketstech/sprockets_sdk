var sdk = require('..');

describe('DeviceSelectionComponent', function() {

    it('should set the type to selection', function() {
        var obj = new sdk.Devices.DeviceSelectionComponent('id', 'name', ['x', 'y', 'z']);
        expect(obj.controlType).toBe(sdk.ControlType.SELECTION);
    });

    it('should set the name', function() {
        var obj = new sdk.Devices.DeviceSelectionComponent('id', 'name', ['x', 'y', 'z']);
        expect(obj.name).toBe('name');
    });

    it('should set the id', function() {
        var obj = new sdk.Devices.DeviceSelectionComponent('id', 'name', ['x', 'y', 'z']);
        expect(obj.id).toBe('id');
    });


    it('should set the values', function() {
        var obj = new sdk.Devices.DeviceSelectionComponent('id', 'name', ['x', 'y', 'z']);
        expect(obj.values.length).toBe(3);
        expect(obj.values[0]).toBe('x');
        expect(obj.values[1]).toBe('y');
        expect(obj.values[2]).toBe('z');
    });


});


