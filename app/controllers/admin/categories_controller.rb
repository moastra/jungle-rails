class Admin::CategoriesController < ApplicationController
  before_action :authenticate

  def index
    @categories = Category.order(id: :desc).all
  end

  def new
    @category = Category.new
  end

  def create
    @category = Category.new(category_params)

    if @category.save
      redirect_to [:admin, :categories], notice: 'Category created!'     
      # redirect_to admin_categories_path, notice: 'Category created!'
    else
      render :new
    end
  end

  private

  def category_params
    params.require(:category).permit(
      :name
    )
  end

  def authenticate
    puts "Username: #{ENV['ADMIN_USERNAME']}, Password: #{ENV['ADMIN_PASSWORD']}"
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV['ADMIN_USERNAME'] && password == ENV['ADMIN_PASSWORD']
    end
  end
end