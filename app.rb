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
  Tasting.create(:sour => params[:sour])
  erb :'show'
end
