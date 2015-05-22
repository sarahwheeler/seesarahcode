class HomeController < ApplicationController
  
  skip_before_filter :verify_authenticity_token, :only => [:resume]

  def portfolio
  end

  def resume
    @courses = Course.all
  end

  def download_resume
    send_file(
    "#{Rails.root}/public/SWheeler_Resume.pdf",
    filename: "SWheeler_Resume.pdf",
    type: "application/pdf"
  )
  end

  def about
  end

  def recipe
  end

  def index
  end

  def treehouse_bubbles
  end

  def treehouse_donut
  end
end
