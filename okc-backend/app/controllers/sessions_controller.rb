class SessionsController < ApplicationController

    def login
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            payload = { user_id: user.id }
            token = encode_token(payload)
            render json: { user: UserSerializer.new(user), jwt: token }, status: :accepted
        else
            render json: { error: "Invalid Credentials" }, status: :unauthorized
        end
    end

end