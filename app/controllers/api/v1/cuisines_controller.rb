class Api::V1::CuisinesController < ApplicationController
  def index
    render json: Cuisine.all
  end

  def show
end
end
