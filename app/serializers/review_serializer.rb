class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :user_id, :body, :rating, :title, :current_user, :created_date

  def created_date
    object.created_at.strftime("%B %d, %Y")
    object.updated_at.strftime("%B %d, %Y")
  end

  def current_user
    object.user.name
  end
end
