class Review < ApplicationRecord
    belongs_to :recipe

    validates :text, length: { maximum: 400 }
end
