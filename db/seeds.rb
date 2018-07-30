# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name:  'Star Wars' }, { name:  'Lord of the Rings' }])
#   Character.createname:  'Luke', movie: movies.first)
cuisine_data = [
  {name:  'Chinese'},
  {name:  'Mexican'},
  {name:  'Italian'},
  {name:  'Japanese'},
  {name:  'Greek'},
  {name:  'French'},
  {name:  'Thai'},
  {name:  'Spanish'},
  {name:  'Indian'},
  {name:  'Mediterranean'}
]

cuisine_data.each do |cuisine|
  Cuisine.create(cuisine)
end

restaurant_data = [
  {name: "Boston Public House", street: "131 State St", city: "Boston", state: "MA", zip: "02110",  phone_number: "617-948-9800"},
  {name: "Legal Crossing", street: "558 Washington St", city: "Boston", state: "MA", zip: "02111",  phone_number: "617-692-8888"},
  {name: "Yvonne's", street: "2 Winter Pl", city: "Boston", state: "MA", zip: "02108",  phone_number: "617-267-0047", website: "www.yvonnesboston.com"},
  {name: "Shojo", street: "9A Tyler St", city: "Boston", state: "MA", zip: "02111",  phone_number: "617-423-7888"},
  {name: "Tora Japanese Restaurant", street: "20B Tyler St", city: "Boston", state: "MA", zip: "02111",  phone_number: "617-542-6688", email: "rs6@restaurant.com"},
  {name: "Gaslight", street: "560 Harrison Ave", city: "Boston", state: "MA", zip: "02118", phone_number: "617-422-0224", email: "rs7@restaurant.com", website: "www.gaslight560.com"},
  {name: "Hot Eastern", street: "42 Beach St", city: "Boston", state: "MA", zip: "02111", phone_number: "857-302-3412", email: "rs8@restaurant.com"},
  {name: "O Ya", street: "9 East St Pl", city: "Boston", state: "MA", zip: "02111", phone_number: "617-654-9900", email: "rs9@restaurant.com"},
  {name: "75 Chestnut", street: "75 Chestnut St", city: "Boston", state: "MA", zip: "02108", phone_number: "617-227-2175", email: "rs10@restaurant.com"},
  {name: 'D’Guru Restaurant', street: '187 Devonshire St', city: 'Boston', state: 'MA', zip: '02110', phone_number: '617-319-4392', website: 'www.guruthecaterer.com'}
]

restaurant_data.each do |restaurant|
  Restaurant.create(restaurant)
end

join_table_data = [
  {restaurant_id: 5, cuisine_id: 4},
  {restaurant_id: 1, cuisine_id: 11},
  {restaurant_id: 2, cuisine_id: 11},
  {restaurant_id: 3, cuisine_id: 6},
  {restaurant_id: 4, cuisine_id: 4},
  {restaurant_id: 6, cuisine_id: 6},
  {restaurant_id: 7, cuisine_id: 3},
  {restaurant_id: 8, cuisine_id: 4},
  {restaurant_id: 9, cuisine_id: 11},
  {restaurant_id: 10, cuisine_id: 9}
]

join_table_data.each do |join|
  RestaurantCuisine.create(join)
end
