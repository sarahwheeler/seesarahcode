class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :site
      t.string :name
      t.date :completion_date
      t.string :badge
      t.float :hours
      t.string :profile

      t.timestamps
    end
  end
end
