class Client <ActiveRecord::Base
    belongs_to :mechanic

    # def destroy_by_id(id)
    #     client = self.find_by(id)
    #     client.destroy
    # end
end