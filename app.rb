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
enable :sessions
class SillyCatz < Sinatra::Base
    TITLE= "Slides For Scrubs"
    
    
    def get_file(name)
        name = '/episodes/'+name
    end

    
    get '/' do
        erb :home
    end



    get '/courseSelection' do
        erb :selectCourse
    end
    
    get '/webDesign' do
        erb :sampleCourse
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
        if (@numCorrect==0)
            @gif = '//giphy.com/embed/cgr5ooluAZJD2'
        else
            @gif = "//giphy.com/embed/5ZQCTwHXBO2Aw"
        end
        erb :graded        
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
        redirect '/webDesign'
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




