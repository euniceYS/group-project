class Api::V1::RestaurantsController < ApplicationController
  def show
    render json: Restaurant.find(params[:id])
  end
end
