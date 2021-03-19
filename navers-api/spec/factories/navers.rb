FactoryBot.define do
  factory :naver do
    name { FFaker::NameBR.name }
    birthdate { FFaker::Time.date }
    adminssion_date { FFaker::Time.date }
    job_role { FFaker::JobBR.title }
    user_id { FFaker::Random.rand(1..1000) }
  end
end
