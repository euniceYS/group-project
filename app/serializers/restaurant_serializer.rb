class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone_number, :email, :website, :restaurant_photos

  has_many :cuisines
  has_many :reviews
  has_many :restaurant_photos

  def address
    "#{object.street}, #{object.city}, #{object.state} #{object.zip}"
  end
end
