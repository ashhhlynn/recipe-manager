class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :text
      t.string :recipe_id
      t.string :user_id
      t.integer :score 
      
      t.timestamps
    end
  end
end
