class Api::V1::CuisinesController < ApplicationController
  def index
    cuisine = Cuisine.all
    render json: cuisine.order(:name)
  end

  def show
    render json: Cuisine.find(params[:id])
  end
end
