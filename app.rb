require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'heroku'
require 'sinatra/base'
require 'pry-byebug'
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
        erb :graded        
    end
end 

run SillyCatz.run!




