class PoliciesController < ApplicationController

  def community
    render 'community'
  end

  def tos
  	render 'tos'
  end

  def privacy
  	render 'privacy'
  end

end