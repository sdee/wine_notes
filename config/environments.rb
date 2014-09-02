require 'sinatra'

env = ENV["RACK_ENV"]

puts env

YAML::load(File.open('config/database.yml'))[env].symbolize_keys.each do |key, value|
  set key, value
end

# #The environment variable DATABASE_URL should be in the following format:
# # => postgres://{user}:{password}@{host}:{port}/path
# configure :production, :development do
# 	db = URI.parse(ENV['DATABASE_URL'] || 'postgres://localhost/mydb')

	ActiveRecord::Base.establish_connection(
			:adapter => 'mysql2',
			:host     => db.host,
			:username => db.user,
			:password => db.password,
			:database => db.path[1..-1],
			:encoding => 'utf8'
	)
