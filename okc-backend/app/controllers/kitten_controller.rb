class KittensController < ApplicationController
    before_action :set_kitten, only: [:show, :update, :destroy]

    def index
        @kittens = Kitten.all 
        render json: @kittens
    end

    def show
        render json: @kitten
    end
    
    def create 
        @kitten = Kitten.new(kitten_params)
        if @kitten.save
            render json: @kitten, status: :created, location: @kitten
        else
            render json: @kitten.errors, status: :unprocessable_entity
        end
    end

    def update
        if @kitten.update(kitten_params)
            render json: @kitten
          else
            render json: @kitten.errors, status: :unprocessable_entity
          end
    end

    def destroy
        @kitten.destroy
    end

    private 

    def set_kitten
        @kitten = Kitten.find(params[:id])
    end

    def kitten_params 
        params.require(:kitten).permit(:name, :sex, :age, :dob, :weight, :breed, :color, :pattern, :altered, :microchipped, :declawed, :intake_date, :intake_time, :location_found, :intake_type, :status, :current_location, :description, :portrait_url)
    end

end
