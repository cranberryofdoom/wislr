class FooterController < ApplicationController

  def about
    render 'about'
  end

  def blog
  	render 'blog'
  end

  def jobs
  	render 'jobs'
  end

  def youth_advisory
  	render 'youth_advisory'
  end

  def faq
  	render 'faq'
  end

end