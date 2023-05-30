Rails.application.routes.draw do
  resources :favorites
  resources :reviews
  resources :recipe_ingredients
  resources :users
  resources :recipes

  post '/login', to: 'sessions#create'
  get '/profile', to: 'users#profile'
  delete '/logout', to: 'sessions#logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
