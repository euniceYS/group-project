class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :restaurant, null: false
      t.belongs_to :user, null: false

      t.text :body, null: false
      t.integer :rating, null: false
      t.string :title, null: false

      t.timestamps null: false
    end
  end
end
