Rails.application.routes.draw do
  root 'cuisines#index'
  devise_for :users, :controllers => { :registrations => :registrations }

  resources :cuisines, only: [:index, :show] do
    resources :restaurants, only: [:show]
  end

  resources :restaurants, only: [:show]
  resources :profiles, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :cuisines, only: [:index, :show]
      resources :restaurants, only: [:show]
    end
  end

end
