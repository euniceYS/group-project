class YelpSearch

  API_KEY = ENV["YELP_API_KEY"]
  # Constants, do not change these
  API_HOST = "https://api.yelp.com"
  SEARCH_PATH = "/v3/businesses/search"
  BUSINESS_PATH = "/v3/businesses/"  # trailing / because we append the business id to the path
  SEARCH_LIMIT = 2

  attr_accessor :location

  def initialize(location)
    @location = location
  end

  # Make a request to the Fusion search endpoint. Full documentation is online at:
  # https://www.yelp.com/developers/documentation/v3/business_search
  def search(term, location=@location)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params = {
      term: term,
      location: location,
      limit: SEARCH_LIMIT
    }

    response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
    response.parse
  end

  def business(business_id)
    url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}"
    response = HTTP.auth("Bearer #{API_KEY}").get(url)
    response.parse
  end

end
