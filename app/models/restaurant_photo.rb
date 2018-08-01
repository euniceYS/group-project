class RestaurantPhoto < ApplicationRecord
  mount_uploader :restaurant_photo, RestaurantPhotoUploader
  
  belongs_to :restaurant
  belongs_to :user

end
