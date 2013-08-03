class HomeController < ApplicationController

  def index
    render 'landing'
  end

  def temp
  	render 'temp'
  end
end