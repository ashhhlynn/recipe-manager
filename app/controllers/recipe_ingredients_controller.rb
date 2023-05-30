class RecipeIngredientsController < ApplicationController
  before_action :set_recipe_ingredient, only: [:show, :destroy]

  def index
    @recipe_ingredients = RecipeIngredient.all
    render json: @recipe_ingredients
  end

  def show
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
    @recipe_ingredient.destroy
  end

  private
    def set_recipe_ingredient
      @recipe_ingredient = RecipeIngredient.find(params[:id])
    end

    def recipe_ingredient_params
      params.require(:recipe_ingredient).permit(:name, :recipe_id)
    end
end