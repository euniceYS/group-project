require "rails_helper"

feature "user sees a list of cuisines" do
  scenario "see all cuisines" do
    cuisine1 = Cuisine.create(name: "Chinese")
    cuisine2 = Cuisine.create(name: "American")
    cuisine3 = Cuisine.create(name: "Italian")

    visit cuisines_path

    expect(page).to have_content("Welcome to Effective Fork")
    expect(page).to have_content(cuisine1.name)
    expect(page).to have_content(cuisine2.name)
    expect(page).to have_content(cuisine3.name)
  end
end
