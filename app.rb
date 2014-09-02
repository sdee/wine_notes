require "sinatra"
require "sinatra/activerecord"

class Tasting < ActiveRecord::Base
end

get '/' do
    "Hello, World!"
end

get '/new' do
  @tasting = Tasting.new
  erb :'new'
end

post '/tasting' do
  Tasting.create(:nose => params[:nose],
                  :berry => params[:berry],
                  :citrus => params[:citrus],
                  :stonefruit => params[:stonefruit],
                  :grassy => params[:grassy],
                  :floral => params[:floral],
                  :spicy => params[:spicy],
                  :mineral => params[:mineral],
                  :sweet => params[:sweet],
                  :sour => params[:sour],
                  :woody => params[:woody],
                  :tannic => params[:tannic],
                  :body => params[:body],
                  :balance => params[:balance],
                  :finish => params[:finish])
  erb :'show'
end
