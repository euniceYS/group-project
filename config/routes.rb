Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :cuisines, only: [:index, :show] do
    resources :restaurants, only: [:show]
  end

  resources :restaurants, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :cuisines, only: [:index, :show]
      resources :restaurants, only: [:show]
    end
  end
end
