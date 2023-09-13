class FavoritesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index
    @favorites = current_user.favorites
    render json: @favorites, include: [:recipe]
  end

  def show
    @favorite = Favorite.find(params[:id])
    render json: @favorite, include: [:recipe]
  end

  def create
    @favorite = Favorite.create(favorite_params)
    if @favorite.valid?
      render json: @favorite, include: [:recipe],  status: :created
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
  end

  private

    def favorite_params
      params.require(:favorite).permit(:user_id, :recipe_id, :id)
    end

end