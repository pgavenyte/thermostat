class Thermostat
  attr_reader :temperature

  DEFAULT_TEMPERATURE = 20

  def initialize
    @temperature = DEFAULT_TEMPERATURE
    @psm = true
  end

  def up
    @temperature += 1 unless maximum_reached?
  end

  def down
    @temperature -= 1 unless minimum_reached?
  end

  def reset
    @temperature = DEFAULT_TEMPERATURE
  end

  def self.instance
    @thermostat ||= self.new
  end

  def in_psm?
    @psm
  end

  def power_save_off
    @psm = false
  end

  def power_save_on
    @psm = true
    @temperature = 25 if maximum_reached?
  end

  def energy_usage
    if temperature < 18
      return :low
    elsif temperature < 25
      return :medium
    end
    return :high
  end

  private

  def maximum_reached?
    if in_psm?
      temperature >= 25
    else
      temperature == 32
    end
  end

  def minimum_reached?
    temperature == 10
  end

end