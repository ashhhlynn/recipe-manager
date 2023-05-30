class FavoriteSerializer < ActiveModel::Serializer
    attributes :user_id, :recipe_id, :id
    belongs_to :recipe
    belongs_to :user
end
  