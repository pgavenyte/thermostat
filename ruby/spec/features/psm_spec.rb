feature 'PSM' do
  
  before do
    visit '/'
    page.find('#temp-reset').click
  end

  scenario 'on by default' do
    expect(page.find('#power-saving-status')).to have_content 'ON'
  end

  scenario 'can be switched off' do
    page.find('#powersaving-off').click
    expect(page.find('#power-saving-status')).to have_content 'OFF'
  end

  
  scenario 'has a maximum temperature of 25 when ON' do
    6.times do
      page.find('#temp-up').click
    end
    expect(page.find('#temp')).to have_content 25
  end

  scenario 'resets the temperature if it is over 25' do
    page.find('#powersaving-off').click
    8.times do
      page.find('#temp-up').click
    end
    expect(page.find('#temp')).to have_content 28
    page.find('#powersaving-on').click
    expect(page.find('#temp')).to have_content 25
  end

  scenario 'has a maximum temperature of 32 when OFF' do
    visit '/'
    page.find('#powersaving-off').click
    13.times do
      page.find('#temp-up').click
    end
    expect(page.find('#temp')).to have_content 32
  end
  
end