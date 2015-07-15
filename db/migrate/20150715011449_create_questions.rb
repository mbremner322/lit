class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |m|
        m.string :name
        m.string :body
        m.integer :rank
        m.timestamps null: false
    end
  end
end
