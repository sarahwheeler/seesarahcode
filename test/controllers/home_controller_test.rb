require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get portfolio" do
    get :portfolio
    assert_response :success
  end

  test "should get resume" do
    get :resume
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get recipe" do
    get :recipe
    assert_response :success
  end

  test "should get index" do
    get :index
    assert_response :success
  end

end
