class CoursesController < ApplicationController


	def index 
		@courses = Course.all
	end

	def new
		@course = Course.new
	end

	def create 
		@course = Course.new(course_params)
    
    respond_to do |format|
      if @course.save
        format.html { redirect_to courses_path, notice: 'Course was successfully created.' }
      else
        format.html { render action: 'new' }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
	end

	def edit
	end

	def update
		respond_to do |format|
      if @course.update(post_params)
        format.html { redirect_to edit_path(@course), notice: 'Course was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
	end

	def destroy
		@course.destroy
    respond_to do |format|
      format.html { redirect_to courses_url }
      format.json { head :no_content }
    end
	end

  private

  def course_params
    params.require(:course).permit(:site, :name, :completion_date, :badge, :hours, :profile)
  end

end
