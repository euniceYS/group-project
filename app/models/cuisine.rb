class Cuisine < ApplicationRecord
  validates :name, presence: true

  has_many :restaurant_cuisines
  has_many :restaurants, through: :restaurant_cuisines
end
