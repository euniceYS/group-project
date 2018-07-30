require 'rails_helper'

feature 'admin signs in', %Q{
  As a signed up admin
  I want to sign in
  So that I can administrate to my account
} do
  scenario 'view link to view admin profile' do
    admin = FactoryBot.create(:admin_user)
    visit new_user_session_path

    fill_in 'Email', with: admin.email
    fill_in 'Password', with: admin.password

    click_button 'Log in'

    expect(page).to have_content('View Profile')
    click_link('View Profile')

    expect(page).to have_content("#{admin.name}'s Profile")
    expect(page).to have_content("Username: #{admin.name}")
    expect(page).to have_content("Email: #{admin.email}")
    expect(page).to have_css("img[src*='#{admin.profile_photo.url(:thumb)}']")
    expect(page).to have_content("admin")
  end
end
