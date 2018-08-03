require 'rails_helper'

feature 'user clicks link to view profile and sees their profile information and then can edit', %Q{
  As a user when I am signed in I want to see a
  link that takes me to my profile,
  because I want to review my account info.
} do
  let!(:user) {FactoryBot.create(:user)}

  scenario 'view link to view profile' do
    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    expect(page).to have_content('View Profile')
    click_link('View Profile')

    expect(page).to have_content("#{user.name}'s Profile")
    expect(page).to have_content("Username: #{user.name}")
    expect(page).to have_content("Email: #{user.email}")
    expect(page).to have_css("img[src*='#{user.profile_photo.url(:large)}']")

  end

  scenario 'user visits profile and can edit their information' do
    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    expect(page).to have_content('View Profile')
    click_link('View Profile')

    click_link('Edit Profile')

    fill_in 'Name', with: 'johnnyCash'
    fill_in 'Email', with: 'cash@cash.com'
    fill_in 'Password', with: 'password2'

    fill_in 'Password confirmation', with: 'password2'
    fill_in 'Current password', with: user.password
    attach_file :user_profile_photo, "#{Rails.root}/spec/support/images/puppies3.jpg"

    click_button 'Update'
    expect(page).to have_content('Your account has been updated successfully.')
    expect(page).to have_content('johnnyCash')
    expect(page).to have_content('cash@cash.com')
    expect(page).to have_css("img[src*='puppies3.jpg']")
  end


end
