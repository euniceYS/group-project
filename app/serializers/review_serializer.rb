class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :user_id, :body, :rating, :title, :user, :created_date

  def created_date
    object.created_at.strftime("%B %d, %Y")
    object.updated_at.strftime("%B %d, %Y")
  end

  def user
    object.user.name
  end
end
