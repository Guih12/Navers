require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.describe "Projects", type: :request do
 describe "GET /projects/" do
    let(:project) {create(:project)}
    
    before(:each) {get "/projects", params: {name: project.name}}

    context 'user not authenticate' do
      it 'return status code 401' do
        expect(response).to have_http_status(401) 
      end
    end
 end
 
  describe "GET /projets/:id"do
    let(:project) {create(:project)}

    before(:each) {get "/projects/#{project.id}"}

    context 'user not authenticate' do
      it 'return status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe "POST /project" do
    let(:project) {create(:project)}
    
    before(:each) {post "/projects"}

    context 'user not authenticate' do
      it 'return status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe "PUT /project/:id" do
    let(:project) {create(:project)}
    let(:project_attributes) {attributes_for(:project)}

    before(:each) {put "/projects/#{project.id}", params:project_attributes}

    context 'user not authenticate' do
      it 'return status code 401' do
        expect(response).to have_http_status(401) 
      end
    end
  end

  describe "DELETE /project/:id" do
    let(:project) {create(:project)}
    before(:each) {delete "/projects/#{project.id}"}
    context 'user not authenticate' do
      
      it 'return status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end
end
