class NaversController < ApplicationController
  before_action :authenticate_user!
 

  def index
    navers = Naver.search(name: params[:name])

    if navers.blank?
      render json: {message: "Naver não encontrado"}, status: :not_found
    else
      render json: navers, status: :ok
    end
  end

  def show
    naver = Naver.find_by(id: params[:id])

    if naver
      render json: {:naver => naver, :project=> naver.projects}, status: :ok
    end
  end

  def store
    project = Project.where(id: params[:projects])
    

    naver = Naver.new(naver_params)
    naver.projects = project
    naver.user_id = current_user.id

    if naver.save
      render json: naver, status: :created
    end

  end

  def update
    naver = Naver.find_by(id: params[:id], user_id: current_user.id)
    project = Project.where(id: params[:projects])
    
    if naver
      naver.update(naver_params)
      naver.update(projects: project)
      render json: naver
    end
  end

  def destroy
    naver = Naver.find_by(id: params[:id], user_id: current_user.id) 

    if naver
      naver.destroy
      render json: {message: "Naver deletado com sucesso"}, status: :ok
    else
      render json: {message: "Esse naver não te pertecente"}, status: :anauthorized
    end
  end

  private
  
  def naver_params
    params.require(:naver).permit(:name, :birthdate, :admission_date, :job_role)
  end
end
