class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :logout]

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { errors: ["Invalid email or password"] }
        end
    end

    def logout
        session.delete :user_id
        head :no_content
    end

end
