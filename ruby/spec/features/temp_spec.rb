feature 'viewing the temp' do
  
  before do
    visit '/'
    page.find('#temp-reset').click
  end

  scenario 'shows 20 degrees by default' do
   expect(page.find('#temp')).to have_content '20'
  end

  scenario 'temp can be increased' do
    page.find('#temp-up').click
    expect(page.find('#temp')).to have_content '21'
    expect(page).not_to have_content '20'
  end

  scenario 'temp can be decreased' do
    page.find('#temp-down').click
    expect(page.find('#temp')).to have_content '19'
    expect(page).not_to have_content '20'
  end

  scenario 'temp can be reset' do
    page.find('#temp-down').click
    expect(page.find('#temp')).to have_content '19'
    page.find('#temp-reset').click
    expect(page.find('#temp')).to have_content '20'
  end
end