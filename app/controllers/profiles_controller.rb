class ProfilesController < ApplicationController
  before_action :authenticate_user!
  def show
    @user = current_user
  end

  def edit

  end

  def update
    
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :current_password, :profile_photo)
  end

end
