class CreateRestaurantCuisines < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurant_cuisines do |t|
      t.belongs_to :restaurant, null: false
      t.belongs_to :cuisine, null: false

      t.timestamps null: false
    end
  end
end
