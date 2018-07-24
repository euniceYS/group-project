require 'rails_helper'

describe Cuisine do
  it { should have_valid(:name).when("American")}
  it { should_not have_valid(:name).when(nil, "")}

  it { should have_many :restaurant_cuisines }
  it { should have_many :restaurants }
end
