class Recipe < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :recipe_ingredients, dependent: :destroy
    has_many :favorites, dependent: :destroy

    accepts_nested_attributes_for :recipe_ingredients
    validates :description, length: { maximum: 300 }
    validates :name, length: { maximum: 20 }
    validates :recipe_ingredients, length: { minimum: 0, maximum: 5 }
end