class CategoriesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        @categories = Category.all
        render json: @categories
      end
end
