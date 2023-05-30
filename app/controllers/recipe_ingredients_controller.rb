class RecipeIngredientsController < ApplicationController

  def index
    @recipe_ingredients = RecipeIngredient.all
    render json: @recipe_ingredients
  end

  def show
    @recipe_ingredient = RecipeIngredient.find(params[:id])
    render json: @recipe_ingredient
  end

  def create
    @recipe_ingredient = RecipeIngredient.create(recipe_ingredient_params)
    if @recipe_ingredient.valid?
      render json: @recipe_ingredient, status: :created
    else
      render json: @recipe_ingredient.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe_ingredient = RecipeIngredient.find(params[:id])

    @recipe_ingredient.destroy
  end

  private


    def recipe_ingredient_params
      params.require(:recipe_ingredient).permit(:name, :recipe_id)
    end
end