Rails.application.routes.draw do
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'sessions',
    registrations: 'registrations',
  }

  #endpoint navers
  get '/navers', to: 'navers#index'
  get '/navers/:id', to: 'navers#show'
  post '/navers', to: 'navers#store'
  put '/navers/:id', to: 'navers#update'
  delete '/navers/:id', to: 'navers#destroy'

  #endpoind projects
  get '/projects', to: 'projects#index'
  get '/projects/:id', to: 'projects#show'
  post '/projects', to: 'projects#store'
  put '/projects/:id', to: 'projects#update'
  delete '/projects/:id', to: 'projects#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
