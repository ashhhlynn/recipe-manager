Rails.application.routes.draw do
  resources :favorites
  resources :reviews
  resources :recipe_ingredients
  resources :users
  resources :recipes
  get '/hello', to: 'application#hello_world'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
