class Client <ActiveRecord::Base
    belongs_to :mechanic

    has_many :comments

    # def destroy_by_id(id)
    #     client = self.find_by(id)
    #     client.destroy
    # end
end