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

  before_validation :strip_whitespace

  def strip_whitespace
    self.website = self.website.strip unless self.website.nil?
    self.email = self.email.strip unless self.email.nil?
    self.phone_number = self.phone_number.strip unless self.phone_number.nil?
    self.name = self.name.strip unless self.name.nil?
    self.street = self.street.strip unless self.street.nil?
    self.city = self.city.strip unless self.city.nil?
    self.state = self.state.strip unless self.state.nil?
  end

  has_many :restaurant_cuisines
  has_many :cuisines, through: :restaurant_cuisines
end
