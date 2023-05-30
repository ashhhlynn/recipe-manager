class ApplicationController < ActionController::Base
    include ActionController::Cookies
    skip_before_action :verify_authenticity_token

    before_action :authorize

    def current_user
        User.find_by(id: session[:user_id])
      end

      def authorize
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
      end
end
