class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :street, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, numericality: true, presence: true
  validates :phone_number, numericality: true, presence: true
  validates :email
  validates :website

  has_many :restaurant_cuisines
  has_many :cuisines, through: :restaurant_cuisines
end
