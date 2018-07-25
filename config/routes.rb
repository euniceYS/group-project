Rails.application.routes.draw do
  root 'cuisines#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :cuisines, only: [:index] do
    resources :restaurants, only: [:show]
  end
end
