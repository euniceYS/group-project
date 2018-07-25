Rails.application.routes.draw do
  root 'cuisines#index'
  devise_for :users, :controllers => { :registrations => :registrations }

  resources :cuisines, only: [:index] do
    resources :restaurants, only: [:show]
  end

  resources :profiles, only: [:show]
end
