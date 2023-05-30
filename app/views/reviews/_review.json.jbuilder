json.extract! review, :id, :text, :recipe_id, :user_id, :score, :created_at, :updated_at
json.url review_url(review, format: :json)
