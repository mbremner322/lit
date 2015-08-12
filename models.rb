ActiveRecord::Base.establish_connection(
  ENV['DATABASE_URL']||'sqlite3:db/development.db')

class Question < ActiveRecord::Base
    has_many :comments, dependent: :destroy
end

class Comment < ActiveRecord::Base
    belongs_to :question
end

class Tag < ActiveRecord::Base

end

