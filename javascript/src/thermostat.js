'use strict';

class Thermostat{

    constructor(){
        this.DEFAULT_TEMP = 20;
        this.temp = this.DEFAULT_TEMP;
        this.MINIMUM_TEMP = 10;
        this.powerSaving = true;
        this.MAX_TEMP_PSM = 25;
        this.MAX_TEMP = 32;
        this.MEDIUM_USAGE = 18;
        this.HIGH_USAGE = 25;
    }

    getCurrentTemp(){
        return this.temp;
    }

    isMinTemp(){
        return this.temp === this.MINIMUM_TEMP;
    }

    isMaxTemp(){
        if (this.isPowerSavingOn() === false) {
            return this.temp === this.MAX_TEMP;
        }
        return this.temp === this.MAX_TEMP_PSM;
    }

    up(){
        if (this.isMaxTemp()) {
            return;   
        }
        this.temp++;
    }

    down(){
        if (this.isMinTemp()) {   
            return;
        }
        this.temp--;
    }

    isPowerSavingOn(){
        return this.powerSaving === true;
    }

    switchPowerSavingOff(){
        return this.powerSaving = false;
    }

    switchPowerSavingOn(){
        if (this.temp > this.MAX_TEMP_PSM){
            this.powerSaving = true;
            this.temp = this.MAX_TEMP_PSM;
        }
        return this.powerSaving = true;
    }

   
    reset(){
        this.temp = this.DEFAULT_TEMP;
    }

    getEnergyUsage(){
        if(this.temp < this.MEDIUM_USAGE) {
            return "LOW";
        } else if(this.temp <= this.HIGH_USAGE) {
            return "MEDIUM";
        }
            return "HIGH";
    }
}