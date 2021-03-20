class ProjectsController < ApplicationController
  before_action :authenticate_user!
  def index
    @project = Project.where("name LIKE ?", "%" + params[:name] + "%")
    if @project.blank?
      render json: {message: 'Projeto não encontrado'}, status: :not_found
    else
      render json: {project: @project}, status: :ok
    end
  end

  def show
    @project = Project.find_by(id: params[:id])
 

    if @project
      puts request.headers['Authorization'].split(' ').last
      render json: {:project => @project, :navers => @project.navers}, status: :ok
    else
      render json: {message: "Projeto não encontrado"}, status: :not_found
    end
  end

  def store
    project = Project.new(name: params[:name])
    project.user_id = current_user.id

    if project.save
      render json: project, status: :created
    end
  end

end
