# Effective Fork

Visit: https://effective-chopsticks.herokuapp.com/

**Effective Fork** showcases restaurants with a 'cuisine' oriented theme. Our inspiration for this idea comes from Boston, a great culinary city. We wanted to develop a application that showcases the variety of delicious foods available here. The team developed this application for our Launch Academy Group Project (https://github.com/LaunchAcademy).

**Ruby 2.3.3, Rails 5.2, and React 15.4.2** was our web development framework and version of choice. We use **Amazon Web Services (AWS) S3** for cloud storage and **Heroku** for app deployment. **Foundation** is used for styling and **Font Awesome** for fonts. The make_it_so gem assisted us bootstrap our development environment (https://github.com/LaunchAcademy/make_it_so).

**Yelp API V3** is used to obtain restaurant cuisine-themed recommendations and photos of cuisines. In order to use the API, you will need to enter your API key into your .env file (see .env.example).
https://www.yelp.com/developers/documentation/v3

**Environment** is configured in development by loading the .env file and using the gem dotenv-rails. Load your AWS and Yelp config vars there. See .env.example as a guide. For Heroku deployment, make sure these environment variables make their way into your CONFIG VARS for the application.

**Testing** for Effective Fork was done using Rspec and Jasmine/Enzyme. Tests are located in **spec/**. Run the Rspec tests by calling `bundle exec rake` and the Enzyme tests by calling `yarn run start`

## Launching Application
Follow these instructions:
```git clone https://github.com/euniceYS/group-project.git
➜ cd group-project
  ~ (enter in your config vars in .env now)
➜ bundle install
➜ yarn install
➜ bundle exec bin/rails db:create
➜ bundle exec bin/rails db:migrate
➜ bundle exec bin/rails db:seed
➜ bundle exec bin/rails s
  ~ (in another terminal window)
➜ yarn run start
  ~ (visit http://localhost:3000)
```

![Build Status](https://app.codeship.com/projects/fd7f0490-70ca-0136-2377-5ecdfd050258/status?branch=master)

Authors:
  - Eunice, https://github.com/euniceYS
  - Ajay, https://github.com/AjayKThakkar
  - Sarmen, https://github.com/SarmenG
  - Rahul, https://github.com/jlnrkc
  - Greg, https://github.com/lsof3r
