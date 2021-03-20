require 'rails_helper'

RSpec.describe Naver, type: :model do
  context 'verify attributes of naver' do
    it 'should fail if name is empty' do
      naver = build(:naver, name: nil)
      expect(naver).to_not be_valid 
    end

    it 'should fail if birthdate is empty' do
      naver = build(:naver, birthdate: nil)
      expect(naver).to_not be_valid 
    end

    it 'should fails if birthdate is empty'do
      naver = build(:naver, admission_date: nil)
      expect(naver).to_not be_valid 
    end

    it 'should fail if job_role is empty' do
      naver = build(:naver, job_role: nil)
      expect(naver).to_not be_valid
    end
  end
  context 'create naver with all attributes' do
    it "should valid naver" do
      naver = build(:naver)
      expect(naver).to_not be_valid 
    end
  end
end
