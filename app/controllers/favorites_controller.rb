class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show, :destroy]

  def index
    @favorites = current_user.favorites
    render json: @favorites, include: [:recipe]
  end

  def show
    render json: @favorite
  end

  def create
    @favorite = Favorite.create(favorite_params)
    @recipe = @favorite.recipe
    if @favorite.valid?
      render json: @favorite, status: :created
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @favorite.destroy
  end

  private
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    def favorite_params
      params.require(:favorite).permit(:user_id, :recipe_id, :id)
    end
end