require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'heroku'
require 'sinatra/base'
require 'json'
require 'active_record'
require 'sqlite3'
require 'pry-byebug'
require 'sinatra/activerecord'
require './models.rb'
require 'htmlentities'

enable :sessions

CODE_AND_COMMENTS = [
    ["var JS_SNAKE= {};","JS_SNAKEというグローバル変数"]
]


class SillyCatz < Sinatra::Base
    
    get '/' do
        erb :home
    end


    get '/courseSelection' do
        erb :selectCourse
    end
    
    get '/webDesign' do
        @arr = [0, 1, 2].shuffle
        @qs = ['HTML','CSS','javascript']
        @as = ['ものの配置','飾り付け','機能付']
        @questions = Question.order(:rank)
        @comments = Comment.order(:rank)
        erb :sampleCourse
    end

    get '/webGame' do
        erb :selectWebGame
    end

    get '/snakeGame' do
        running_dir = File.dirname(__FILE__)
        running_dir = Dir.pwd if (running_dir == '.')
        @codeAndComments1 = File.open(running_dir + '/public/jsCodeFiles/snake-1.js', 'r').readlines
        @codeAndComments1.each do |t|
            t = t.gsub! '<','&lt;'
        end        
        @codeAndComments2 = File.open(running_dir + '/public/jsCodeFiles/snake-2.js', 'r').readlines
        @codeAndComments2.each do |t|
            t = t.gsub! '<','&lt;'
        end
        @codeAndComments3 = File.open(running_dir + '/public/jsCodeFiles/snake-3.js', 'r').readlines
        @codeAndComments3.each do |t|
            t = t.gsub! '<','&lt;'
        end
        @codeAndComments4 = File.open(running_dir + '/public/jsCodeFiles/snake-4.js', 'r').readlines
        @codeAndComments4.each do |t|
            t = t.gsub! '<','&lt;'
        end
        @codeAndComments5 = File.open(running_dir + '/public/jsCodeFiles/snake-5.js', 'r').readlines
        @codeAndComments5.each do |t|
            t = t.gsub! '<','&lt;'
        end
        @codeAndComments6 = File.open(running_dir + '/public/jsCodeFiles/snake-6.js', 'r').readlines
        @codeAndComments6.each do |t|
            t = t.gsub! '<','&lt;'
        end
        
        @questions = Question.order(:rank)
        @comments = Comment.order(:rank)
        erb :snakeInteractive
    end
    get '/dataS' do
        erb :dataS
    end
    
    get '/tetrisGame' do
        running_dir = File.dirname(__FILE__)
        running_dir = Dir.pwd if (running_dir == '.')
        @codeAndComments = File.open(running_dir + '/public/jsCodeFiles/tetris.html', 'r').readlines
        @codeAndComments.each do |t|
            t = t.gsub! '<','&lt;'
        end        
        @questions = Question.order(:rank)
        @comments = Comment.order(:rank)
        erb :tetrisInteractive
        
    end

    get '/dnd-grade' do
        @result = params[:correctness].split(',')
        @result.collect! { |each|
            each = each.split(':')
        }
        @numOfQ = @result.length
        @numCorrect = 0
        @result.each do |each|
            if each[1] == 'true'
                @numCorrect += 1
            end
        end
        if (@numCorrect==3)
            redirect '/webD/moreQ'
        else
            redirect '/webD/explanation'
        end
        erb :graded        
    end
    
    get '/webD/explanation' do
        erb :webDexp
    end
    get '/animateName' do

        erb :animateName
    end
    post '/submitQ' do
        name = params[:subject]
        body = params[:question]
        tags = params[:tags]
        rank = 0
        Question.create({
            name: name,
            body: body,
            tags: tags,
            rank: rank
        })
#        redirect '/webDesign'
    end

    post '/submitR/:id' do
        id = params[:id]
        Comment.create({
            body: params[:subject],
            rank: 0,
            question_id: id
        })
        redirect '/webDesign'
    end

    get '/question/last' do
        question = Question.last
        {comment_body: question.body}.to_json
    end

    get '/cssGame' do
        erb :cssGame
    end

    get '/jsGame' do
        erb :jsGame
    end

    get '/htmlGame' do
        erb :htmlGame
    end
    
    
end 

run SillyCatz.run!




