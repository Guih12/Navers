require 'rails_helper'

RSpec.describe Naver, type: :model do
  it 'Should fail if name is empty' do
    naver = build(:naver, name: nil)
    expect(naver).to_not be_valid 
  end

  it 'Should fail if birthdate is empty ' do
    naver = build(:naver, birthdate: nil)
    expect(naver).to_not be_valid 
  end

  it 'Should fail is admission_date is empty ' do
    naver = build(:naver, adminssion_date: nil)
    expect(naver).to_not be_valid 
  end

  it 'Should fails is job_role is empty' do
    naver = build(:naver, job_role: nil)
    expect(naver).to_not be_valid 
  end

  it 'Should fails is user_id is empty' do
    naver = build(:naver, user_id: nil)
    expect(naver).to_not be_valid
  end

end
