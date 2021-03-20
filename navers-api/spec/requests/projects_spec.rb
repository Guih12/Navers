require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.describe "Projects", type: :request do
 describe "GET /projects/:name" do
    let(:project) {create(:project)}
    let(:headers) do 
      {
        'Accept' => 'application/json', 
        'Content-Type' => 'application/json',
        'Authorization' => 'Bearer #{token}'
      }
    end
    before(:each) {get "/projects/#{project.name}", params: {}, headers: headers}
    it "return status code 200" do
      
      expect(response).to have_http_status(200) 
    end
 end
end
