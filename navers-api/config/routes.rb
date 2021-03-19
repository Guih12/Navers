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

  get '/projects/:name', to: 'projects#index'
  get '/projects/show/:id', to: 'projects#show'
  post '/projects', to: 'projects#store'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
