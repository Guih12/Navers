class ProjectsController < ApplicationController
  before_action :authenticate_user!
  def index

    project = Project.search(name: params[:name])

    if project.blank?
      render json: {message: 'Projeto não encontrado'}, status: :not_found
    else
      render json: project, status: :ok
    end
  end

  def show
    project = Project.find_by(id: params[:id])
     

    if project
      render json: {:project => project, :navers => project.navers}, status: :ok
    else
      render json: {message: "Projeto não encontrado"}, status: :not_found
    end
  end

  def store

    navers = Naver.where(id: params[:navers])
    
    project = Project.new(name: params[:name], navers: navers)
    project.user_id = current_user.id
    
    puts project
    if project.save
      render json: project, status: :created
    end
  end
  
  def update
    project = Project.where(id: params[:id], user_id: current_user.id)
    navers = Naver.where(id: params[:navers])

    if project
      project.update(name: params[:name], navers: navers)
      render json: project, status: :ok
    else
      render json: {message: "Esse projeto não te pertence"}, status: :unauthorized
    end
  end
  
  def destroy 
    project = Project.find_by(id: params[:id], user_id: current_user.id)
    if project
      project.destroy
      render json: {message: "Projeto deletado com sucesso"}, status: :ok
    else
      render json: {messaage: "Esse projeto não te pertence"}, status: :unauthorized
    end
  end
end
