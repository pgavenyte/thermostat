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

  
  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(city + " " + data.main.temp + " C");
    })
  }
  function updateTemp() {
    $("#temp").text(thermostat.temp);
    $("#energy-usage").attr('class', thermostat.getEnergyUsage());
   $("#energy-usage").text(thermostat.getEnergyUsage());

  }

})