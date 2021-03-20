class Project < ApplicationRecord
  include SearchCop

  belongs_to :user, optional: true
  has_many :naver_projects
  has_many :navers, through: :naver_projects

  validates :name, presence: true

  search_scope :search do
    attributes :name
  end
end
