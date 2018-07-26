Rails.application.routes.draw do
  root 'cuisines#index'
  devise_for :users, :controllers => { :registrations => :registrations }

  resources :cuisines, only: [:index] do
    resources :restaurants, only: [:show]
  end

  resources :profiles, only: [:show]


 resources :restaurants do
   resources :reviews, only: [:new]
 end
  namespace :api do
    namespace :v1 do
      resources :cuisines, only: [:index]
    end
  end
end
