class Cuisine < ApplicationRecord
  validates :name, presence: true

  has_many :restaurant_cuisines
  has_many :restaurants, through: :restaurant_cuisines

  def set_photo_url_from_yelp
    default_img_url = "https://s3-media3.fl.yelpcdn.com/bphoto/-CGF2waYISJrhOn-K2KhtQ/ls.jpg"
    yelp_search = YelpSearch.new("Boston")
    result = yelp_search.search(self.name)
    if result["businesses"]
      cuisine_img = result["businesses"].try(:first)
      if cuisine_img
        cuisine_img = cuisine_img["image_url"]
      end
      self.photo_url = cuisine_img
    else
      self.photo_url = default_img_url
    end
    self.save!
  end
end
