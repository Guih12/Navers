require 'rails_helper'

RSpec.describe "Projects", type: :request do
 describe "GET /projects/:name" do
    let(:project) {create(:project)}
    before(:each) {get "/projects/#{project.name}"}

   context 'when the project exist' do
      it "return statos code 200" do
        expect(response).to have_http_status(200) 
      end

      it "retuns the project found" do
        json_response = JSON.parse(response.body)
        expect(json_response).to_not be_empty
      
      end
    end
 end

  
 describe "GET projects/:id" do
      let(:project) {create(:project)}
    context 'when the project found' do

      before(:each) {get "/projects/show/#{project.id}"}
  
     it 'return status code 200' do
       expect(response).to have_http_status(200)
     end

     it 'return the project found' do
       json_response = JSON.parse(response.body)
       expect(json_response).to_not be_empty 
     end
   end
 end

 #teste POT/projects
 
 describe "POST /projects" do
   let(:attributes) {create(:project)}
  
   before {post "/projects", params: attributes}

   it 'return status code 201' do
     expect(response).to have_http_status(201)
   end

 end
end
