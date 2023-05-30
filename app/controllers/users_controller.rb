class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, include: [:favorites]
  end

  def profile
    render json: {  user: current_user }, status: :accepted
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      session[:user_id] = @user.id
      render json: @user, status: :created
    else
      render json: { message: 'Failed to create user. Please try again.' }
    end
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
