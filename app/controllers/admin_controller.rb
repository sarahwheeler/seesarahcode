class AdminController < ApplicationController

	def superpanel
		 @posts = Post.all
	end

end
