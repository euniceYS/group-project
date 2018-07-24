require "rails_helper"

feature "user sees a list of cuisines" do
  let!(:cuisine1) {Cuisine.create(name: "Chinese")}
  let!(:cuisine2) {Cuisine.create(name: "American")}
  let!(:cuisine3) {Cuisine.create(name: "Italian")}

  scenario "see all cuisines" do
    visit cuisines_path

    expect(page).to have_content("Welcome to Effective Fork")
    expect(page).to have_content(cuisine1.name)
    expect(page).to have_content(cuisine2.name)
    expect(page).to have_content(cuisine3.name)
  end
end
