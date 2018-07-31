class Api::V1::RestaurantsController < ApplicationController

  skip_before_action :verify_authenticity_token, :only => [:create]

  def show
    @restaurant = Restaurant.find(params[:id])
    render json: @restaurant
  end

  def create
    @restaurant = Restaurant.new
    @restaurant.name = params[:name]
    @restaurant.street = params[:street]
    @restaurant.city = params[:city]
    @restaurant.state = params[:state]
    @restaurant.zip = params[:zip]
    @restaurant.phone_number = params[:phoneNumber]
    @restaurant.email = params[:email]
    @restaurant.website = params[:website]
    @restaurant.cuisines << Cuisine.find(params[:cuisine_id])
    restaurant_photo = RestaurantPhoto.new
    restaurant_photo.user = current_user
    restaurant_photo.restaurant_photo = params[:photo]
    restaurant_photo.restaurant = @restaurant
    @restaurant.restaurant_photos << restaurant_photo
    if @restaurant.save
        render json: @restaurant
    else
        render status: 422, json: {
          message: "ERROR: UNPROCESSABLE ENTITY",
          errorList: @restaurant.errors.full_messages
        }.to_json
    end

  end
end
