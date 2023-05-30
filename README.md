# Dash Delish

## Description
  
A content management application for recipes with five ingredients or less. Created with a Redux & React JavaScript frontend and Ruby on Rails backend. Users can share recipes, rate and review recipes, and add recipes to a personal favorites list. Styled with Semantic UI React and CSS.
  
## Functionality

- Users can create accounts and sign in, authenticated and authorized through BCrypt.

- Users can view recipes and sort by alphabetical order, date, number of reviews, and highest rating.

- Users can view recipe reviews.

- Users can create recipes to share. 

- Users can write recipe reviews and rate recipes. 

- Users can store recipes under a personal favorites list. 

## Tech Stack

- Ruby 
- Rails
- React
- Redux
- Semantic UI React
- HTML & CSS
- PostgresQL - Database
- Bcrypt for authentication and authorization
- rack-cors - provides support for Cross-Origin Resource Sharing for Rack compatible web applications(allows the front-end portion of this project to perform fetch requests)
- active_model_serializers - allows customization and rendering of data in JSON format as responses to requests
- React Router

## Instructions

- clone this repo to your local environment -- git clone < git repository >
- run $bundle install - installs gems and dependencies
- run $rake db:create - creates the database for the first time, or try $rails db:reset
- run $rake db:migrate - creates the tables for the database
- run rails s p-3001 to start the server
- cd(change directory) into the client folder
- run $'npm install' into your command line
- run $'npm start' into your command line

