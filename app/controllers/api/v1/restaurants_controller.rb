class Api::V1::RestaurantsController < ApplicationController

  skip_before_action :verify_authenticity_token, :only => [:create]

  def show
    @restaurant = Restaurant.find(params[:id])
    render json: @restaurant
  end

  def create
    @restaurant = Restaurant.create(restaurant_params)
    @restaurant.restaurant_photos << create_restaurant_photo
    @restaurant.cuisines << get_cuisine
    if @restaurant.save
        render json: @restaurant
    else
        render status: 422, json: {
          message: "ERROR: UNPROCESSABLE ENTITY",
          errorList: @restaurant.errors.full_messages
        }.to_json
    end
  end

  def restaurant_params
    params.permit(:name, :street, :city, :state, :zip, :phone_number, :email, :website)
  end

  def create_restaurant_photo
    restaurant_photo = RestaurantPhoto.new
    restaurant_photo.restaurant_photo = params[:photo]
    restaurant_photo.user = current_user
    binding.pry
    restaurant_photo
  end

  def get_cuisine
    Cuisine.find(params[:cuisine_id])
  end

end
