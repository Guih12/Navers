class Project < ApplicationRecord
  has_many :naver_projects
  has_many :navers, through: :naver_projects
end
