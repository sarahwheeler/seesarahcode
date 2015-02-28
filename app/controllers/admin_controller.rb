class AdminController < ApplicationController
	before_action :authenticate_admin!, only: [:new, :create, :edit, :destroy]

	def superpanel
		 @posts = Post.all
	end


	private
		def set_admin
      @admin = Admin.find(params[:id])
    end 

end
