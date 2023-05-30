class SessionsController < ApplicationController

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
    end

end