class RecipesController < ApplicationController

    def index
      @recipes = Recipe.all
      render json: @recipes
    end
  
    def show
      render json: @recipe, include: [:reviews, :recipe_ingredients]
    end
  
    def create
      @recipe = Recipe.create(recipe_params)
   
      if @recipe.save
        render json: @recipe, status: :created
      else
        render json: { errors: ["Recipe invalid."]  }
      end
    end
  
    def update
      if @recipe.update(recipe_params)
        render json: @recipe
      else
        render json: @recipe.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @recipe.destroy
    end
  
    private

  
      def recipe_params
        params.require(:recipe).permit(:average, :name, :user_id, :image_url, :description)
      end
  end
