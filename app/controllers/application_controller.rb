class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password, :password_confirmation, :remember_me, :profile_photo, :profile_photo_cache] )
    devise_parameter_sanitizer.permit(:account_update, keys:  [:name, :password, :password_confirmation, :current_password, :profile_photo, :profile_photo_cache, :remove_profile_photo] )
  end

end
