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
      #flash[:notice] = "Review added successfully!"
      #redirect_to root_path
      render status: 201, json: {
        message: "GOOD",
        error_list: ["Review successfully added. Implement Redirect to Rest. Show Page when done"] #@review.errors.full_messages
      }.to_json
    else
      render status: 500, json: {
        message: "ERROR",
        error_list: @review.errors.full_messages
      }.to_json
    end
  end

end
