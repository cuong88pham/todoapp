Rails.application.routes.draw do
  devise_for :users

  mount TODOAPP::API => '/'
  resources :todo_lists

  root 'templates#index'

  get '/templates/:path.html' => 'templates#template', :constraints => { :path => /.+/  }

end
