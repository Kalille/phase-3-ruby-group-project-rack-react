Owner.destroy_all
Car.destroy_all
Mechanic.destroy_all
Client.destroy_all

Owner.create(name: "Jamal")
Owner.create(name: "Michelle")

Mechanic.create(name: "Devon", age: 25, experience: 3)

Mechanic.create(name: "Evan", age: 35, experience: 11)
Mechanic.create(name: "Lill", age: 29, experience: 10)
Mechanic.create(name: "Rome", age: 40, experience: 15)
Mechanic.create(name: "Bill", age: 50, experience: 25)

Car.create(make: "Nissan", model: "Pathfinder", year: 2019, owner_id: Owner.all.sample.id, mechanic_id: Mechanic.all.sample.id)
Car.create(make: "Honda", model: "Passport", year: 2011, owner_id: Owner.all.sample.id, mechanic_id: Mechanic.all.sample.id)
Client.create(first_name: "Jake", last_name:"Johnson", make: "Honda", model: "Passport", year: 2011,  mechanic_id: Mechanic.all.sample.id)


