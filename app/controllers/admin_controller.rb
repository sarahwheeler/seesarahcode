class AdminController < ApplicationController
	before_action :authenticate_admin!, only: [:superpanel]

	def superpanel
		 @posts = Post.where(is_published: true)
		 @unpublished_posts = Post.where(is_published: false)
		 @courses = Course.all
	end

end
