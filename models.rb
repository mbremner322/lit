ActiveRecord::Base.establish_connection(
  ENV['DATABASE_URL']||'sqlite3:db/development.db')

class Question < ActiveRecord::Base
end

class Comment < ActiveRecord::Base
end
