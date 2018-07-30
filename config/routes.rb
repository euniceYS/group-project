Rails.application.routes.draw do
  root 'cuisines#index'
  devise_for :users, :controllers => { :registrations => :registrations }

  resources :cuisines, only: [:index] do
    resources :restaurants, only: [:show, :new, :create]
  end

  resources :restaurants, only: [:show]
  resources :profiles, only: [:show]

  resources :restaurants do
    resources :reviews, only: [:new]
  end

  namespace :api do
    namespace :v1 do
      resources :cuisines, only: [:index]
      resources :restaurants, only: [:show]
      resources :reviews, only: [:create, :index]
    end
  end
end
