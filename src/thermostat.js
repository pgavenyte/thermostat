class Thermostat{
    constructor(){
        this.temp = 20;
        this.powerSaving = true;
    }

    up(){
        if (this.powerSaving && this.temp <= 24){
            this.temp++;
        }
        else if(!this.powerSaving && this.temp <= 31){
            this.temp++;
        }
    }

    down(){
        if (this.temp != 10){   
            this.temp--;
        }
    }

    switchPowerSaving(){
        if(this.powerSaving){
            this.powerSaving = false;
        }
        else{
            this.powerSaving = true;
            if(this.temp > 25){
                this.temp = 25;
            }
        }
    }

    reset(){
        this.temp = 20;
    }

    getEnergyUsage(){
        if(this.temp < 18){
            return "low-usage";
        }
        else if(this.temp <= 25){
            return "medium-usage";
        }
        else{
            return "high-usage";
        }
    }
}