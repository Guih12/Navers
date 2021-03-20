require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.describe "Projects", type: :request do
 describe "GET /projects/" do
    let(:project) {create(:project)}
    let(:headers) do 
      {
        'Content-Type' => 'application/json',
        'Authorization' => 'Bearer' + 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4YWZhODQ5Ni1mMDI5LTQ2ODUtODMyMS1lYTUyYjRjNTRhYzgiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjE2MjUwNTkyLCJleHAiOjE2MTg4NDI1OTJ9._jysmZNyC-neriihUuRz-zrXeohEuOUNsGsfBB5ou8M'
      }
    end
    before(:each) {get "/projects", params: {name: project.name}, headers: headers}
    it "return status code 200" do
      
      expect(response).to have_http_status(200) 
    end
 end
end
