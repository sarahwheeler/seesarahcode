class AdminController < ApplicationController
	before_action :authenticate_admin!, only: [:superpanel]

	def superpanel
		 @posts = Post.all
		 @courses = Course.all
	end

end
