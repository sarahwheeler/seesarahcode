class HomeController < ApplicationController
  
  skip_before_filter :verify_authenticity_token, :only => [:resume]

  def portfolio
  end

  def resume
    @courses = Course.all
  end

  def about
  end

  def contact
  end

  def recipe
  end

  def index
  end

  def treehouse_bubbles
  end
end
