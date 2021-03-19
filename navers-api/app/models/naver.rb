class Naver < ApplicationRecord
  belongs_to :user

  validates :name, :birthdate, :adminssion_date, :job_role, :user_id, presence: true
end
