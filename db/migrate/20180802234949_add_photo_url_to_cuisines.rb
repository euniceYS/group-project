class AddPhotoUrlToCuisines < ActiveRecord::Migration[5.2]
  def change
    add_column :cuisines, :photo_url, :string
  end
end
