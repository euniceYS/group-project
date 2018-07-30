class CuisinesController < ApplicationController
  def index
    @cuisines = Cuisine.all
  end

  def show
    @cuisine = Cuisine.find(params[:id])
    @restaurants = @cuisine.restaurants
  end
end
