Rails.application.routes.draw do
  resources :categories
  resources :favorites
  resources :reviews
  resources :recipe_ingredients
  resources :users
  resources :recipes

  post '/login', to: 'sessions#create'
  get '/profile', to: 'users#profile'
  delete '/logout', to: 'sessions#logout'
  
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
