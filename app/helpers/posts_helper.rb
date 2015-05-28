module PostsHelper

	def previous_entry(post_id)
		post = Post.find(post_id)
		# return all posts ordered from oldest to newest
		# find post_id in the array and save the position
		# if there is an element in the position before post_id
			# return an arrow link to it
		# else
			# don't display an arrow/link

	end

	def next_entry(post_id)
	end

end
