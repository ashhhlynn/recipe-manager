require 'test_helper'

class RecipeIngredientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @recipe_ingredient = recipe_ingredients(:one)
  end

  test "should get index" do
    get recipe_ingredients_url
    assert_response :success
  end

  test "should get new" do
    get new_recipe_ingredient_url
    assert_response :success
  end

  test "should create recipe_ingredient" do
    assert_difference('RecipeIngredient.count') do
      post recipe_ingredients_url, params: { recipe_ingredient: { name: @recipe_ingredient.name, recipe_id: @recipe_ingredient.recipe_id } }
    end

    assert_redirected_to recipe_ingredient_url(RecipeIngredient.last)
  end

  test "should show recipe_ingredient" do
    get recipe_ingredient_url(@recipe_ingredient)
    assert_response :success
  end

  test "should get edit" do
    get edit_recipe_ingredient_url(@recipe_ingredient)
    assert_response :success
  end

  test "should update recipe_ingredient" do
    patch recipe_ingredient_url(@recipe_ingredient), params: { recipe_ingredient: { name: @recipe_ingredient.name, recipe_id: @recipe_ingredient.recipe_id } }
    assert_redirected_to recipe_ingredient_url(@recipe_ingredient)
  end

  test "should destroy recipe_ingredient" do
    assert_difference('RecipeIngredient.count', -1) do
      delete recipe_ingredient_url(@recipe_ingredient)
    end

    assert_redirected_to recipe_ingredients_url
  end
end
