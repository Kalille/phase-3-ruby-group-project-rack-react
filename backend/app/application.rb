
require"pry"
class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]
    elsif req.path.match(/comments/)
      if req.env["REQUEST_METHOD"] === "GET"
 

      return [200, { 'Content-Type' => 'application/json' }, [ Comment.all.to_json ]]
    
        
        elsif req.env["REQUEST_METHOD"] === "POST"
        input = JSON.parse(req.body.read)
        comment = Comment.create(comment: input["comment"],client_id: input["client_id"])
        return [200, { 'Content-Type' => 'application/json' }, [ comment.to_json ]]
        end
    elsif req.path.match(/mechanics/)
    
      if (req.env["REQUEST_METHOD"] === "GET")
 
        if req.path.split("/mechanics/").length === 1
      return [200, { 'Content-Type' => 'application/json' }, [ Mechanic.all.to_json({:include => :clients}) ]]
        elsif
          mech_id = req.path.split("/mechanics/").last
          mech = Mechanic.find_by(id: mech_id)
      
          return [200, { 'Content-Type' => 'application/json' }, [ mech.to_json({:include => :clients}) ]]
        end
        elsif req.env["REQUEST_METHOD"] === "POST"

    
          input = JSON.parse(req.body.read)
         mechanic = Mechanic.create(name: input["name"], age: input["age"], experience: input["experience"])
         return [200, { 'Content-Type' => 'application/json' }, [ mechanic.to_json ] ]
        
        elsif req.env["REQUEST_METHOD"] === "DELETE"
     
          id = req.path.split("/mechanics/").last
          Mechanic.find(id).delete
    
          return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]
     
  
         end

    elsif req.path.match(/clients/)
      
      if req.env["REQUEST_METHOD"] === "GET"

        if req.path.split("/clients/").length === 1
      return [200, { 'Content-Type' => 'application/json' }, [ Client.all.to_json({:include => :comments}) ]]
        elsif
          client_id = req.path.split("/clients/").last
          client1 = Client.find_by(id: client_id)
          return [200, { 'Content-Type' => 'application/json' }, [ client1.to_json({:include => :comments}) ]]
        end
    elsif req.env["REQUEST_METHOD"] === "POST"
    
      input = JSON.parse(req.body.read)
      
     
      client = Client.create(first_name: input["first_name"], last_name: input["last_name"], make: input["make"],model: input["model"],year: input["year"], mechanic_id: input["mechanic_id"])
    
      return [200, { 'Content-Type' => 'application/json' }, [ client.to_json ] ]
      

    
       elsif req.env["REQUEST_METHOD"] === "DELETE"
     
        id = req.path.split("/clients/").last
        Client.find(id).delete
  
        return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]
   

       end

  

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end



