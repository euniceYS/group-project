require 'rails_helper'

describe Restaurant do
  it { should have_valid(:name).when("Backyard Betty's")}
  it { should_not have_valid(:name).when(nil, "")}

  it { should have_valid(:street).when("170 W. Broadway")}
  it { should_not have_valid(:street).when(nil, "")}

  it { should have_valid(:city).when("Boston")}
  it { should_not have_valid(:city).when(nil, "")}

  it { should have_valid(:state).when("MA")}
  it { should_not have_valid(:state).when(nil, "")}

  it { should have_valid(:zip).when("02127")}
  it { should_not have_valid(:zip).when(nil, "")}
  it { should_not have_valid(:zip).when("1234")}

  it { should have_valid(:phone_number).when("617-766-8955")}
  it { should_not have_valid(:phone_number).when(nil, "")}
  it { should_not have_valid(:phone_number).when(nil, "0123456789")}

  it { should have_many :restaurant_cuisines }
  it { should have_many :cuisines }
end
