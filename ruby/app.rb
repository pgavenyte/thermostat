require 'sinatra/base'
require 'json'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base

  get '/' do
    File.read('public/index.html')
  end

  get "/temp" do
    thermostat = Thermostat.instance
    { temperature: thermostat.temp }.to_json
  end

  post "/temperature" do
    thermostat = Thermostat.instance
    thermostat.update(params[:temp])
    { status: 200 }.to_json
  end

  run! if app_file == $0
end
