# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140902003333) do

  create_table "tastings", force: true do |t|
    t.string   "wine"
    t.datetime "date"
    t.integer  "rating"
    t.integer  "nose"
    t.integer  "berry"
    t.integer  "citrus"
    t.integer  "stonefruit"
    t.integer  "grassy"
    t.integer  "floral"
    t.integer  "spicy"
    t.integer  "mineral"
    t.integer  "sweet"
    t.integer  "sour"
    t.integer  "woody"
    t.integer  "tannic"
    t.integer  "body"
    t.integer  "balance"
    t.integer  "finish"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "desc"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
