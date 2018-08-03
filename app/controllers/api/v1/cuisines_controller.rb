class Api::V1::CuisinesController < ApplicationController
  def index
    @cuisines = Cuisine.select(:id, :name, :photo_url)
    @cuisines.order(:name)
    result = {cuisines: @cuisines}
    render :json => result
  end

  def show
    render json: Cuisine.find(params[:id])
  end
end
