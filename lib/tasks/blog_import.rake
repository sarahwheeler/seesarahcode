require 'tumblr_client'
require 'awesome_print'

namespace :blog_import do
  desc "TODO"

  task tumblr_to_blog: :environment do
		admin = Admin.where("is_super_admin = ?", true)
	 	client = Tumblr::Client.new(:consumer_key => @key, 
	 														 :consumer_secret => @secret,
                							 :oauth_token => @oauth_token, 
                							 :oauth_token_secret => @oauth_token_secret)
	 	blog = client.posts('seesarahcode.tumblr.com', :type => 'text')
	 	number = blog['posts'].length - 1
	 	(0..number).to_a.reverse.each do |n|
	 		date =  blog["posts"][n]["date"]
   		title = blog["posts"][n]["title"]
   		content = blog["posts"][n]["body"]
   		new_post = Post.new(title: title, content: content, created_at: date, 
   						user_id: admin[0].id, is_published: true)
   		new_post.save!
	 	end  
  end

end
