var sdk = require('..');
var testHelper = require('./testHelper.js');
var mockEventBus = require('./mockEventBus.js');
describe('DeviceInstance', function() {
    var eventBus;
    var unsubs = [];
    beforeEach(function(){
        eventBus = mockEventBus;
    });

    afterEach(function() {
        for (var i=0; i < unsubs.length; ++i) {
            unsubs[i]();
        }
        unsubs.length = 0;
    });

    it('should set the id', function() {
        var bool = new sdk.Devices.DeviceInstance('id');
        bool.eventBus = eventBus;
        expect(bool.id).toBe('id');
    });

    it('should allow sensors to be added', function() {
        var bool = new sdk.Devices.DeviceInstance('id');
        bool.eventBus = eventBus;
        bool.addSensor(new sdk.Devices.DeviceValueComponent('cid', 'name'));
        expect(bool.componentMetadata().sensors.hasOwnProperty('cid')).toBe(true);
        expect(bool.componentMetadata().sensors['cid'].name).toBe('name');
    });


    it('should allow controls to be added', function() {
        var bool = new sdk.Devices.DeviceInstance('id');
        bool.eventBus = eventBus;
        bool.addControl(new sdk.Devices.DeviceValueComponent('cid', 'name'));
        expect(bool.componentMetadata().controls.hasOwnProperty('cid')).toBe(true);
        expect(bool.componentMetadata().controls['cid'].name).toBe('name');
    });

    it('should allow sensor values to be updated', function() {
        var bool = new sdk.Devices.DeviceInstance('id');
        bool.eventBus = eventBus;
        bool.addSensor(new sdk.Devices.DeviceValueComponent('cid', 'name'));
        bool.updateSensorValue('cid', 88);
        expect(bool.getComponentValues().sensors['cid'].value).toBe(88);
    });


    it('should emit an event when sensor values are updated', function(done) {
        var bool = new sdk.Devices.DeviceInstance('id');
        bool.eventBus = eventBus;
        bool.addSensor(new sdk.Devices.DeviceValueComponent('cid', 'name'));
        var unsub = eventBus.subscribe('device.sensor.value', function(evt) {
            expect(evt.device).toBe('id');
            expect(evt.component).toBe('cid');
            expect(evt.controlType).toBe(sdk.ControlType.VALUE);
            expect(evt.value).toBe(88);
            unsub();
            done();
        });
        unsubs.push(unsub);
        bool.updateSensorValue('cid', 88);
    });

    it('should allow control values to be updated', function() {
        var bool = new sdk.Devices.DeviceInstance('id');
        bool.eventBus = eventBus;
        bool.addControl(new sdk.Devices.DeviceValueComponent('cid', 'name'));
        bool.updateControlValue('cid', 88);
        expect(bool.getComponentValues().controls['cid'].value).toBe(88);
    });


    it('should emit an event when control values are updated', function(done) {
        var bool = new sdk.Devices.DeviceInstance('id');
        bool.eventBus = eventBus;
        bool.addControl(new sdk.Devices.DeviceValueComponent('cid', 'name'));
        var unsub = eventBus.subscribe('device.control.value', function(evt) {
            expect(evt.device).toBe('id');
            expect(evt.component).toBe('cid');
            expect(evt.controlType).toBe(sdk.ControlType.VALUE);
            expect(evt.value).toBe(88);
            unsub();
            done();
        });
        unsubs.push(unsub);
        bool.updateControlValue('cid', 88);
    });
});


