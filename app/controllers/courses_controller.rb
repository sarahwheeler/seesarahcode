class CoursesController < ApplicationController


	def index 
		@courses = Courses.all
	end

end
