# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cuisine_data = [
  {name: 'Chinese'},
  {name: 'Mexican'},
  {name: 'Italian'},
  {name: 'Japanese'},
  {name: 'Greek'},
  {name: 'French'},
  {name: 'Thai'},
  {name: 'Spanish'},
  {name: 'Indian'},
  {name: 'Mediterranean'}
]

cuisine_data.each do |cuisine|
  Cuisine.create(cuisine)
end
