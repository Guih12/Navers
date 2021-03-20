class Project < ApplicationRecord
  belongs_to :user, optional: true
  has_many :naver_projects
  has_many :navers, through: :naver_projects

  validates :name, presence: true
end
