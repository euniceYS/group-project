class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :street, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip,
    numericality: true,
    length: { is: 5 }
  validates :phone_number,
    presence: true,
    format: { with: /\d{3}-\d{3}-\d{4}/ }
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i }

  has_many :restaurant_cuisines
  has_many :cuisines, through: :restaurant_cuisines
end
