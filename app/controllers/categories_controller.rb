class CategoriesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        @categories = Category.all.order(title: :asc)
        render json: @categories
    end

end
