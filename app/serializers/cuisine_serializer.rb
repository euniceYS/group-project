class CuisineSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo_url, :yelp_recommendation

  has_many :restaurants


  def yelp_recommendation
    yelp_search_recommendation = YelpSearch.new("Boston")
    recommendations = yelp_search_recommendation.suggestion_from_yelp(object.name)
  end
end
