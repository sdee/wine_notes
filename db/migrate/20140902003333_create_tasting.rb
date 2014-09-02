class CreateTasting < ActiveRecord::Migration
  def change
    create_table :tastings do |t|
      t.string :wine
      t.datetime :date
      t.integer :rating
      t.integer :nose
      t.integer :berry
      t.integer :citrus
      t.integer :stonefruit
      t.integer :grassy
      t.integer :floral
      t.integer :spicy
      t.integer :mineral
      t.integer :sweet
      t.integer :sour
      t.integer :woody
      t.integer :tannic
      t.integer :body
      t.integer :balance
      t.integer :finish
    end
  end
end
