require 'rails_helper'

feature 'admin signs in', %Q{
  As a signed up admin
  I want to sign in
  So that I can administrate to my account
} do
  scenario 'specify valid credentials' do
    admin = FactoryBot.create(:admin_user)

    visit new_user_session_path

    fill_in 'Email', with: admin.email
    fill_in 'Password', with: admin.password

    click_button 'Log in'

    expect(page).to have_content('Signed in successfully')
  end

  scenario 'specify invalid credentials' do
    visit new_user_session_path

    click_button 'Log in'
    expect(page).to have_content('Invalid Email or password')
    expect(page).to_not have_content('Sign Out')
  end
end
