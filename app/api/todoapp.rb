# # encoding: utf-8
module TODOAPP
  class API < Grape::API
    version 'v1', using: :path, vendor: 'siliconstraits'
    format :json
    prefix 'api'

    resource :todo_lists do
      desc "Create todo list"
      params do
        requires :title, type: String
        requires :user_id, type: Integer
      end

      post '/' do
        todolist = TodoList.create(title: params[:title], user_id: params[:user_id])
        present todolist
        status 200
      end
      params do
        requires :id, type: Integer
        requires :status, type: Boolean
      end

      put '/' do
        todolist = TodoList.find(params[:id]).update_attributes(:status => params[:status])
        present todolist
        status 200
      end

      desc "Get List by User"
      params do
        requires :user_id, type: String
      end
      get '/' do
        lists = TodoList.where(user_id: params[:user_id])
        present lists
        status 200
      end

      desc "Delete List"
      params do
        requires :id, type: String
      end
      get '/delete' do
        lists = TodoList.find(params[:id]).destroy
        present lists
        status 200
      end
    end

    resource :users do

      params do
        requires :email, type: String, desc: "User password"
        requires :password, type: String, desc: "User password"
      end

      post '/login' do
      email     = params[:email]
      password  = params[:password]
      # Find user with email or username
      @resource = User.where("email = ?", email).first
      # Check user existed with account
      if @resource
       # Check user match password
       if @resource.valid_password?(password)
         # Check user confirmation through email
         if @resource.active_for_authentication?
           status(200)
           present @resource
         else
           error!({error: 'unconfirmed'}, 401)
         end
        else
          error!({error: 'invalid_password'}, 401)
        end
        else
          error!({error: 'invalid email'}, 401)
        end
      end
    end

    resource :todo_lists do

    end

  end
end
