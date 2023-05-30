class RecipeIngredient < ApplicationRecord
    belongs_to :recipe
    validates :name, length: { maximum: 50 }
end
