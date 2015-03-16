class HomeController < ApplicationController
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
end
