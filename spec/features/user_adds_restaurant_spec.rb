require "rails_helper"

feature "user adds a restaurant for a specific cuisine" do
  let!(:cuisine1) {Cuisine.create(name: "Chinese")}
  let!(:cuisine2) {Cuisine.create(name: "American")}
  let!(:cuisine3) {Cuisine.create(name: "Italian")}

  scenario "user sees and fills out a form to create a new restaurant" do

    user = FactoryBot.create(:user)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'

    visit new_cuisine_restaurant_path(cuisine1)

    expect(page).to have_content("New Restaurant Form")
    fill_in 'Name', with: "Falafel King"
    fill_in 'Street', with: "112 Main St"
    fill_in 'City', with: "Boston"
    fill_in 'State', with: "MA"
    fill_in 'Zip', with: "02144"
    fill_in 'Phone number', with: "617-090-1234"
    fill_in 'Email', with: "falafel@falfel.com"

    fill_in 'Website', with: "iluvfalafel.net"
    click_button 'Add Restaurant'
    expect(page).to have_content("Restaurant added successfully!")
  end
end
