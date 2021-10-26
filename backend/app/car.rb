class Car <ActiveRecord::Base
    belongs_to :mechanic
    belongs_to :owner
end