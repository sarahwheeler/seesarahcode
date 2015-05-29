module PostsHelper

	def previous_entry(post_id)
		post = Post.find(post_id)
		posts = Post.where("is_published is true").order("created_at ASC") # return all posts ordered from oldest to newest
		index = posts.index{ |post| post.id == post_id } # find post_id in the array and save the position
		previous_post = posts[index-1] if posts[index-1].present?
		if posts[index-1].present? # if there is an element in the position before post_id
			# return an arrow link to it
			render :partial => 'previous', :locals => { :post => previous_post }
		else
			return nil
		end
	end

	def next_entry(post_id)
		post = Post.find(post_id)
		posts = Post.where("is_published is true").order("created_at ASC") # return all posts ordered from oldest to newest
		index = posts.index{ |post| post.id == post_id } # find post_id in the array and save the position
		next_post = posts[index+1] if posts[index+1].present?
		if posts[index+1].present? # if there is an element in the position before post_id
			# return an arrow link to it
			render :partial => 'next', :locals => { :post => next_post }
		else
			return nil
		end
	end

end
