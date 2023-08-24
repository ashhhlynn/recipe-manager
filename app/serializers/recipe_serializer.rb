class RecipeSerializer < ActiveModel::Serializer

  attributes :id, :name, :image_url, :description, :average, :category_id, :recipe_ingredients, :reviews
  has_many :reviews
  has_many :recipe_ingredients
  has_many :favorites
  belongs_to :category

end