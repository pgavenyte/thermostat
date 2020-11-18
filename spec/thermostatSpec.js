'use strict';

describe('Thermostat', function(){
    var thermostat;
    beforeEach(function(){
        thermostat = new Thermostat;
    });

    describe('Starts at 20', function(){
        it ('thermostat has default temperature of 20', function(){
            expect(thermostat.getCurrentTemp()).toEqual(20);
        });
    });

    describe('Changing temp', function(){
        it ('increases the temperature', function(){
            thermostat.up();
            expect(thermostat.getCurrentTemp()).toEqual(21);
        });

        it ('decreases the temperature', function(){
            thermostat.down();
            expect(thermostat.getCurrentTemp()).toEqual(19);
        });
    });

    describe('Minimum temp', function(){
        it ('Prevents temp from going below 10', function(){
            for (var i=0; i<20; i++){    
                thermostat.down();
            }
            expect(thermostat.getCurrentTemp()).toEqual(10);
        });
    });

    describe('Power saving mode', function(){
        it('is on by default', function(){
            expect(thermostat.isPowerSavingOn()).toEqual(true);
        });

        it('can switch PSM off', function() {
            thermostat.switchPowerSavingOff();
            expect(thermostat.isPowerSavingOn()).toEqual(false);
        });

        it('can switch PSM back on', function() {
            thermostat.switchPowerSavingOff();
            expect(thermostat.isPowerSavingOn()).toEqual(false);
            thermostat.switchPowerSavingOn();
            expect(thermostat.isPowerSavingOn()).toEqual(true);
        });


        it('Sets maximum temp to 25 when on', function(){
            for(var i=0; i<10; i++){
                thermostat.up();
            }
            expect(thermostat.getCurrentTemp()).toEqual(25);
        });

        it('Sets maximum temp to 32 when off', function(){
            thermostat.switchPowerSavingOff();

            for(var i=0; i<15; i++){
                thermostat.up();
            }
            expect(thermostat.getCurrentTemp()).toEqual(32);
        });

        it('Limits temp back to 25 when power saving turned back on', function(){
            thermostat.switchPowerSavingOff();

            for(var i=0; i<15; i++){
                thermostat.up();
            }

            thermostat.switchPowerSavingOn();
            expect(thermostat.getCurrentTemp()).toEqual(25);
        })
    });

    describe('Reset temperature', function(){
        it ('Resets the temperature to 20', function(){
            thermostat.up();
            thermostat.reset();

            expect(thermostat.getCurrentTemp()).toEqual(20);
        });
    });

    describe('Energy usage', function(){
        it ('returns low-usage if temp less than 18', function(){

            for(var i=0; i<5; i++){
                thermostat.down();
            }
            expect(thermostat.getEnergyUsage()).toEqual("low-usage");
        });

        it ('returns medium-usage if temp less than or equal to 25', function(){
            expect(thermostat.getEnergyUsage()).toEqual("medium-usage");
        });

        it ('returns high-usage if temp greater than 25', function(){
            thermostat.powerSaving= false;

            for(var i=0; i<10; i++){
                thermostat.up();
            }

            expect(thermostat.getEnergyUsage()).toEqual("high-usage");
        });
    });
});