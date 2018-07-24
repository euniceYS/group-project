class RestaurantsController < ApplicationController
  def show
    @cuisine = Cusine.find(params[:cuisine_id])
    @restaurant = @cuisine.restaurants
  end
end
