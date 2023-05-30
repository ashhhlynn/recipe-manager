class CreateRecipeIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :recipe_ingredients do |t|
      t.string :name
      t.string :recipe_id

      t.timestamps
    end
  end
end
