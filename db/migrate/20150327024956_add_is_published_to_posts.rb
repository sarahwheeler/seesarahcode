class AddIsPublishedToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :is_published, :boolean, default: false
  end
end
