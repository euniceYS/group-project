Rails.application.routes.draw do
  root 'cuisines#index'
  devise_for :users, :controllers => { :registrations => :registrations }

  resources :cuisines, only: [:index, :show] do
    resources :restaurants, only: [:show, :new, :create]
  end

  resources :restaurants, only: [:show, :create]
  resources :profiles, only: [:show]

  resources :restaurants do
    resources :reviews, only: [:new, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :cuisines, only: [:index, :show]
      resources :restaurants, only: [:show, :create]
      resources :reviews, only: [:new, :create, :index, :destroy]
    end
  end
end
