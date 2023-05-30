require "application_system_test_case"

class RecipeIngredientsTest < ApplicationSystemTestCase
  setup do
    @recipe_ingredient = recipe_ingredients(:one)
  end

  test "visiting the index" do
    visit recipe_ingredients_url
    assert_selector "h1", text: "Recipe Ingredients"
  end

  test "creating a Recipe ingredient" do
    visit recipe_ingredients_url
    click_on "New Recipe Ingredient"

    fill_in "Name", with: @recipe_ingredient.name
    fill_in "Recipe", with: @recipe_ingredient.recipe_id
    click_on "Create Recipe ingredient"

    assert_text "Recipe ingredient was successfully created"
    click_on "Back"
  end

  test "updating a Recipe ingredient" do
    visit recipe_ingredients_url
    click_on "Edit", match: :first

    fill_in "Name", with: @recipe_ingredient.name
    fill_in "Recipe", with: @recipe_ingredient.recipe_id
    click_on "Update Recipe ingredient"

    assert_text "Recipe ingredient was successfully updated"
    click_on "Back"
  end

  test "destroying a Recipe ingredient" do
    visit recipe_ingredients_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Recipe ingredient was successfully destroyed"
  end
end
