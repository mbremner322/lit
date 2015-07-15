class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |m|
        m.string :body
        m.integer :rank
        m.timestamps null: false
    end
  end
end
