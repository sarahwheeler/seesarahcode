class Post < ActiveRecord::Base
	belongs_to :admin

	def draft?
		is_published ? true : false
	end

end
