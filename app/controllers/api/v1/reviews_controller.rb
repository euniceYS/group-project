class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user!

  skip_before_action :verify_authenticity_token, :only => [:create]

  def index
    render json: Review.all
  end

  def create
    @review = Review.new
    @restaurant = Restaurant.find(params[:review][:restaurant_id])
    @review.restaurant = @restaurant
    @review.title = params[:review][:title]
    @review.body = params[:review][:body]
    @review.rating = params[:review][:rating]
    @review.user = current_user
    if @review.save
      render status: 201, json: {
        message: "SUCCESS"
      }.to_json
    else
      render status: 422, json: {
        message: "ERROR: UNPROCESSABLE ENTITY",
        errorList: @review.errors.full_messages
      }.to_json
    end
  end

end
