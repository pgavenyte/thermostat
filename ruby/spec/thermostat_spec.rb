require 'thermostat'

describe Thermostat do

  describe "#temp" do
    it "has a default temperature of 20" do
      expect(subject.temperature).to eq Thermostat::DEFAULT_TEMPERATURE
    end
  end

  describe "#up" do
    it "increases the temperature" do
      subject.up
      expect(subject.temperature).to eq 21
    end

    
    it "has a maximum temperature of 25 when PSM ON" do
      6.times do
        subject.up
      end
      expect(subject.temperature).to eq 25
    end
    

    
    it "has a maximum temperature of 32 when PSM OFF" do
      subject.power_save_off
      13.times do
        subject.up
      end
      expect(subject.temperature).to eq 32
    end
    
  end

  describe "#down" do
    it "decreases the temperature" do
      subject.down
      expect(subject.temperature).to eq 19
    end

    it "has a minimum temperature of 10 degrees" do
      11.times { subject.down }
      expect(subject.temperature).to eq 10
    end
  end

  describe "#reset" do
    it "resets the temperature to 20" do
      subject.up
      subject.up
      subject.reset
      expect(subject.temperature).to eq Thermostat::DEFAULT_TEMPERATURE
    end
  end

  describe "in_psm?" do
    it "is in power save mode by default" do
      expect(subject).to be_in_psm
    end
  end

  describe "#power_save_off" do
    it "turns off power_save_mode" do
      subject.power_save_off
      expect(subject).not_to be_in_psm
    end
  end

  describe "#power_save_on" do
    it "turns on power_save_mode" do
      subject.power_save_off
      subject.power_save_on
      expect(subject).to be_in_psm
    end

    it "reduces the temperature to 25" do
      subject.power_save_off
      8.times { subject.up }
      expect(subject.temperature).to eq 28
      subject.power_save_on
      expect(subject.temperature).to eq 25
    end
  end

  describe "#energy_usage" do
   
    it "LOW when temp is below 18 degrees" do
      subject.down
      subject.down
      subject.down
      expect(subject.energy_usage).to eq :low
    end
    
    it "MEDIUM when temp is between 18 and 25 degrees" do
      expect(subject.energy_usage).to eq :medium
    end
  
    it "HIGH when temp is 25 or more degrees" do
      5.times { subject.up }
      expect(subject.energy_usage).to eq :high
    end
  end
  
end