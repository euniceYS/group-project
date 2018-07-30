class RestaurantsController < ApplicationController
  before_action :authenticate_user!

  def show
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @cuisine = Cuisine.find(params[:cuisine_id])
    @restaurant.cuisines << @cuisine
    if @restaurant.save
      flash[:notice] = "Restaurant added successfully!"
      redirect_to new_cuisine_restaurant_path(@cuisine)
    else
      flash[:error] = @restaurant.errors.full_messages.join(". ")
      render :new
    end

  end

  def new
    @restaurant = Restaurant.new
    @cuisine = Cuisine.find(params[:cuisine_id])
  end

  def restaurant_params
      params.require(:restaurant).permit(:name, :street, :city, :state, :zip, :phone_number, :email, :website, :cuisine_id)
  end

end
