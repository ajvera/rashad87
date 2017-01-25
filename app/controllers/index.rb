get '/' do
  erb :"index"
end

get '/about' do
	erb :"about"
end

get '/project' do
	erb :"project"
end

get '/contact' do
	erb :"contact"
end