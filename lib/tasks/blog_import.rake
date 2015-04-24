require 'tumblr_client'
require 'awesome_print'
require './config/secrets'

namespace :blog_import do
  desc "TODO"

  task tumblr_to_blog: :environment do
 			admin = Admin.where("is_super_admin = ?", true)
  	 	client = Tumblr::Client.new(:consumer_key => @key, 
  	 														 :consumer_secret => @secret,
                  							 :oauth_token => @oauth_token, 
                  							 :oauth_token_secret => @oauth_token_secret)
  	 	blog = client.posts('seesarahcode.tumblr.com')
  	 	ap blog

     	blog['posts'].each do |post|
     		puts "POST:  "
     		ap post
     		date1 = post.date
     		title = post.title
     		content = post.body
     		new_post = Post.new(title: title, content: content, created_at: date1, 
     						user_id: admin[0].id, is_published: true)
     		ap new_post
     		
     	end

     
  end

end
