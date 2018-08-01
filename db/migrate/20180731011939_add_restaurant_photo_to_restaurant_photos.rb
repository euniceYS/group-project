class AddRestaurantPhotoToRestaurantPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurant_photos, :restaurant_photo, :string
  end
end
