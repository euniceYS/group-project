Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :cuisines, only: [:index] do
    resources :restaurants, only: [:show, :create, :new]
  end



  namespace :api do
    namespace :v1 do
      resources :cuisines, only: [:index]
    end
  end
end
