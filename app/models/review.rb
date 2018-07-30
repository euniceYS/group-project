class Review < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user
  validates :body, presence: true
  validates :rating, presence: true
  validates :title, presence: true
end
