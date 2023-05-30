class RecipesController < ApplicationController
  skip_before_action :authorize, only: [:index, :update, :show]
  def index
    @recipes = Recipe.all
    render json: @recipes, include: [:reviews, :recipe_ingredients]
  end

  def show
    @recipe = Recipe.find(params[:id])

    render json: @recipe, include: [:reviews, :recipe_ingredients]
  end

  def create
    @recipe = Recipe.create(recipe_params)
    if params[:recipe_ingredients]
        params[:recipe_ingredients].each do |ri|
          RecipeIngredient.create(recipe_id: @recipe.id, name: ri)
        end 
      end 
    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: { errors: ["Recipe invalid."]  }
    end
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update(recipe_params)
      render json: @recipe, include: [:reviews, :recipe_ingredients]
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])

    @recipe.destroy
  end

  private


    def recipe_params
      params.require(:recipe).permit(:average, :name, :user_id, :image_url, :description, :recipe_ingredients => [:recipe_id, :name, :id])
    end
end