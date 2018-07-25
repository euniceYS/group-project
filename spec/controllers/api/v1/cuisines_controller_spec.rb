require "rails_helper"

RSpec.describe Api::V1::CuisinesController, type: :controller do
  let!(:first_cuisine) { Cuisine.create(name: "Chinese") }
  let!(:second_cuisine) { Cuisine.create(name: "Mexican") }

  describe "GET#index" do
    it "should return a list of all the cuisines" do

      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
          expect(response.content_type).to eq("application/json")

          expect(returned_json.length).to eq 1
          expect(returned_json["cuisines"][0]["name"]).to eq "Chinese"

          expect(returned_json["cuisines"][1]["name"]).to eq "Mexican"

    end
  end
end
