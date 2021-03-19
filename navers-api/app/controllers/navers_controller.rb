class NaversController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: current_user
  end
  def store
    naver = Naver.new(naver_params)
    naver.user_id = current_user.id
    if naver.save
      render json: naver, status: :created  
    end
  end

  private

  def naver_params
    params.permit(:name, :birthdate, :adminssion_date, :job_role)
  end
end
