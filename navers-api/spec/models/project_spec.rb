require 'rails_helper'

RSpec.describe Project, type: :model do
  it 'Should fail if name is empty' do
    project = build(:project, name: nil)
    expect(project).to_not be_valid
  end

  it 'Should valid prject' do
    project = build(:project)
    expect(project).to be_valid
  end
end
