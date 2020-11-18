$( document ).ready(function() {
  var thermostat = new Thermostat();

  updateTemp();

  $("#temp-up").click(function() {
    thermostat.up();
    updateTemp();
  });

  $("#temp-down").click(function() {
    thermostat.down();
    updateTemp();
  });

  $("#temp-reset").click(function() {
    thermostat.reset();
    updateTemp();
  });

  $("#power-saving-status").text("ON");

  $("#powersaving-on").click(function() {
    thermostat.switchPowerSavingOn();
    $("#power-saving-status").text("ON");
    updateTemp();
  });

  $("#powersaving-off").click(function() {
    thermostat.switchPowerSavingOff();
    $("#power-saving-status").text("OFF");
  });

  function updateTemp() {
    $("#temp").text(thermostat.temp);
    $("#energy-usage").attr('class', thermostat.getEnergyUsage());
   $("#energy-usage").text(thermostat.getEnergyUsage());

  }

})