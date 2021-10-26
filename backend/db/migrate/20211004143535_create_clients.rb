class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :make
      t.string :model
      t.integer :year
      t.integer :mechanic_id
    end
  end
end
