class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone_number, :email, :website

  has_many :cuisines
  has_many :reviews

  def address
    "#{object.street}, #{object.city}, #{object.state} #{object.zip}"
  end
end
