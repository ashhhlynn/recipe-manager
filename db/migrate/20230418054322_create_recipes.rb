class CreateRecipes < ActiveRecord::Migration[5.2]
    def change
      create_table :recipes do |t|
        t.string :name
        t.string :image_url
        t.string :description
        t.string :user_id
        t.float :average
        t.timestamps
      end
    end
  end