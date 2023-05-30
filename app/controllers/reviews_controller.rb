class ReviewsController < ApplicationController
before_action :set_review, only: [:show, :destroy]

def index
  @reviews = Review.all
  render json: @reviews
end

def show
  @review = Review.find(params[:id])

  render json: @review
end

def create
  @review = Review.new(review_params)
  if @review.save
    render json: @review, status: :created
  else
    render json: { errors: ["Review invalid."]  }, status: :unprocessable_entity
  end
end

def destroy
  @review = Review.find(params[:id])

  @review.destroy
end

private
  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:text, :recipe_id, :score)
  end
end