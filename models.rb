ActiveRecord::Base.establish_connection(
  ENV['DATABASE_URL']||'sqlite3:db/development.db')

class Comment < ActiveRecord::Base
end

class Question < ActiveRecord::Base
end

class Tag < ActiveRecord::Base
end
