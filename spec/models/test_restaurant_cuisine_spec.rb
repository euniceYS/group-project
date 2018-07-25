require 'rails_helper'

describe RestaurantCuisine do
  it { should belong_to :cuisine }
  it { should belong_to :restaurant }
end
