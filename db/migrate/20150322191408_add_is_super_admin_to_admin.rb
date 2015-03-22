class AddIsSuperAdminToAdmin < ActiveRecord::Migration
  def change
    add_column :admins, :is_super_admin, :boolean
  end
end
