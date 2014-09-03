require "sinatra"
require "sinatra/activerecord"

class Tasting < ActiveRecord::Base
end

get '/' do
  "Hello, World!"
end

get '/tasting/:id' do
  id = params[:id]
  result = []
  tasting = Tasting.find(id)
  components = ['nose', 'berry', 'citrus', 'stonefruit', 'grassy', 'floral',
    'spicy', 'mineral', 'sweet', 'sour', 'woody', 'tannic',
    'body', 'balance', 'finish']

    a = []
    components.each do |x|
      d = Hash.new
      d['axis'] = x
      d['value'] = tasting[x]
      a.push(d)
    end

    result.push(a)

    @json = result.to_json()
  end

  get '/tasting/new' do
    @tasting = Tasting.new
    erb :'new'
  end

  post '/tasting' do
    @tasting = Tasting.create(:nose => params[:nose],
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
