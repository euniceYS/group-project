require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password 'password'
    password_confirmation 'password'
    name 'ilikehotchocolate'
    profile_photo { Rack::Test::UploadedFile.new(Rails.root.join("#{Rails.root}/spec/support/images/puppies.jpg"), 'image/jpeg') }

   factory :admin_user do
     admin true
   end
 end
end
