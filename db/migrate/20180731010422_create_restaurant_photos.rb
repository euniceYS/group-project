class CreateRestaurantPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurant_photos do |t|
      t.belongs_to :restaurant, null: false
      t.belongs_to :user, null: false
      t.text :description
      t.string :title

      t.timestamps null: false
    end
  end
end
