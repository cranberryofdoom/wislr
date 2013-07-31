class HomeController < ApplicationController

  def index
  	@user = User.new
    render 'landing'
  end



end