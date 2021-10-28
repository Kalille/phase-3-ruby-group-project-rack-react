class Comment <ActiveRecord::Base
    belongs_to :client

    # def destroy_by_id(id)
    #     client = self.find_by(id)
    #     client.destroy
    # end
end