class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Static function set permit strong params
  def self.assign_params(*permitted_params)
    define_method :resource_params do
      return [] if request.get?
      if defined?(resource_request_name)
        [ params.require(resource_request_name).permit(permitted_params) ]
      else
        [ params.require(controller_name.singularize).permit(permitted_params) ]
      end
    end
  end

end
