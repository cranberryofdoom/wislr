class PoliciesController < ApplicationController

  def community
    render 'community'
  end

  def tos
  	render 'tos'
  end

  def privacy_policy
  	render 'privacy_policy'
  end


end