class CuisineSerializer < ActiveModel::Serializer
  attributes :id, :name, :yelp_cuisine_tile_img, :yelp_recommendation

  has_many :restaurants

  def yelp_cuisine_tile_img
    yelp_search_img = YelpSearch.new("Boston")
    result = yelp_search_img.search(object.name)
    cuisine_img = result["businesses"].try(:first)
      if cuisine_img
        cuisine_img = cuisine_img["image_url"]
      end
  end

  def yelp_recommendation
    yelp_search_recommendation = YelpSearch.new("Boston")
    recommendations = yelp_search_recommendation.suggestion_from_yelp(object.name)
  end
end
