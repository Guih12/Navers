class Naver < ApplicationRecord
  include SearchCop

  belongs_to :user
  has_many :naver_projects
  has_many :projects, through: :naver_projects
  
  validates :name, :birthdate, :admission_date, :job_role, presence:true
  
  search_scope :search do
    attributes :name, :admission_date, :job_role
  end
end
