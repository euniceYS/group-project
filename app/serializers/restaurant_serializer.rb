class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone_number, :email, :website, :photo

  has_many :cuisines
  has_many :reviews
  has_many :restaurant_photos

  def address
    "#{object.street}, #{object.city}, #{object.state} #{object.zip}"
  end

  def photo
    if object.restaurant_photos.empty?
      return "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg"
    else
    object.restaurant_photos[0].restaurant_photo.extra_large.url
    end
  end
end
