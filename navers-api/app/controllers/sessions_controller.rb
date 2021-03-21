class SessionsController < Devise::SessionsController
  clear_respond_to
  respond_to :json

  


  private

  #def respond_with(resource, _opts = {})
    #super do |resource|
      #if user_signed_in?
        #render json: resource.token = encode(user_id: current_user.id)
      #end
    #end
  #end

  def respond_with(resource, _opts = {})

    render json: resource

  end


  def respond_to_on_destroy
    head :no_content
  end

  def encode(payload, expiration = nil)
    expiration ||= Rails.application.secrets.jwt_expiration_hours
    payload = payload.dup
    payload['exp'] = expiration.to_i.hours.from_now.to_i

    JWT.encode payload, Rails.application.secrets.jwt_secret
  end
end
