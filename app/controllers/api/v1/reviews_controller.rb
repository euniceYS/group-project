class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_destruction, :only => [:destroy]
  skip_before_action :verify_authenticity_token, :only => [:create, :destroy]

  def index
    render json: Review.all
  end

  def create
    @review = Review.new
    @restaurant = Restaurant.find(params[:restaurant_id])
    @review.restaurant = @restaurant
    @review.title = params[:review][:title]
    @review.body = params[:review][:body]
    @review.rating = params[:review][:rating]
    @review.user = current_user

    if @review.save
      render status: 201, json: @review

    else
      render status: 422, json: {
        message: "ERROR: UNPROCESSABLE ENTITY",
        errorList: @review.errors.full_messages
      }.to_json
    end
  end

  def destroy
      @review = Review.find(params[:id])
      if @review.destroy
        @reviews = @review.restaurant.reviews
        render json: {reviews: @reviews}
      else
        @reviews = review.restaurant.reviews
        render json: {reviews: @reviews}
      end
  end

  protected
  def authorize_destruction
    if !current_user || !current_user.admin?
      render status: 401
      return false
    end
  end
end
