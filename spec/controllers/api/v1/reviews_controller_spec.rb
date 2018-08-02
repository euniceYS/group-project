require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do

  describe "GET#index" do
    it "response should be a redirect when user is unauthenticated" do

      get :index
      expect(response.status).to eq(302)
      expect(response.content_type).to eq("text/html")

    end
  end
end
