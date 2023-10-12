# Project Title:
Where Is Robbert?

## Description:
Single-page web app to assist Digital Nomads with figuring out their next spot at campgrounds. Information provided will include Nearest City, Description of the location (do they have hot showers? Is it wheelchair accessible? Do they have RV hookups? Do they allow cats? Does the local ranger’s station have a strong WiFi signal?), and an image to represent the findings.


## Installation
- Clone the repository: git clone 
- Install dependencies: npm install
- Set up your environment variables
- Initialize the database: npm run 
- Run MySql and migrate to Souce db:migrate
- Start the server: npm start
- MongoDB


## Usage
To run this project locally, follow these steps:

- Clone the repository: git clone 
- Install dependencies: npm install
- Set up your environment variables
- Initialize the database: npm run db:migrate
- Start the server: npm start
  
# Screen Shot Images

<figure>
  <img src="images\Screenshot (401).png" alt="Login and New User Page" style="width:100%"> <figcaption><i>Login and New User Page</i></figcaption>
  </figure>

<figure>
  <img src="images\Screenshot (402).png" alt="Profile Page" style="width:100%"><figcaption><i>Profile Page</i></figcaption>
</figure> 

<figure>
  <img src="images\Screenshot (403).png" alt="Budget Tracker Page" style="width:100%"><figcaption><i>Budget Tracker Page</i></figcaption>
</figure>

<figure>
  <img src="images\Screenshot (404).png" alt="Itinerary Page" style="width:100%"><figcaption><i>Itinerary Page</i></figcaption>
</figure> 

## License
This project is licensed under the MIT License.

## Features
The project follows the MVC (Model-View-Controller) paradigm for a structured organization:
- controllers/: Contains route handlers and business logic.
- models/: Defines Sequelize models and schema.
- views/: Handlebars.js templates for the UI.
- public/: Static assets (CSS, images, etc.).
- routes/: Express.js route definitions.
- config/: Configuration files.
- middlewares/: Custom middleware functions.
- db/: Database-related files (migrations, seeders).
 
Environment Variables - Sensitive information, including API keys and database credentials, are stored as environment variables for security. 
We set up the files in the root directory with the following variables:
- DB_HOST=your-database-host
- DB_USER=your-database-username
- DB_PASS=your-database-password
- SESSION_SECRET=your-session-secret 

## Test
Go Travel-Geek page (Heroku deployment page)
Create a User Accout
Go to Budget page and type in a budget
Clink on Links to outside services

## Technology Used
CSS
JavaScript
Node.js
Express.js
Used Handlebars.js
MySQL
Swquelize ORM
GET & POST routes
Created a RESTful API
Deployed in Heroku
GraphQL
MongoDB

# Folder Structure
The project follows the MVC (Model-View-Controller) paradigm for a structured organization:
- controllers/: Contains route handlers and business logic.
- models/: Defines Sequelize models and schema.
- views/: Handlebars.js templates for the UI.
- public/: Static assets (CSS, images, etc.).
- routes/: Express.js route definitions.
- config/: Configuration files.
- middlewares/: Custom middleware functions.
- db/: Database-related files (migrations, seeders).

# Acceptance Criteria
Use Node.js and Express.js to create a RESTful API.
Use Handlebars.js as the templating engine.
Use MySQL and the Sequelize ORM for the database.
Have both GET and POST routes for retrieving and adding new data.
Be deployed using Heroku (with data).
Use at least one new library, package, or technology that we haven’t discussed. (extra credit)
Have a polished UI.
Be responsive.
Be interactive (i.e., accept and respond to user input).
Have a folder structure that meets the MVC paradigm.
Include authentication (express-session and cookies).
Protect API keys and sensitive information with environment variables.
Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
Finally, you must add your project to the portfolio that you created in Module 2.  -->

# Project Reference
[project page - Heroku] <a href="https://travelgeekalicia-bd545f74fdfc.herokuapp.com/">Travel Geek</a>
[GitHub page] <a href="https://github.com/vini3076/prj3-WhereisRobbert">Github Page</a>

# Sources
[Stack Overflow] <a href="https://stackoverflow.com/questions/2056/what-are-mvp-and-mvc-and-what-is-the-difference">Stack Overflow</a>
[sweetalert2] <a href="https://sweetalert2.github.io/">sweetalert2</a>
[Mini-Project: MERN] <a href="https://bootcampspot.instructure.com/courses/3634/pages/21-module-21-mern?module_item_id=971851">Mini-Project: MERN</a>
[Michael Seaman - Linkedin] <a href="https://www.linkedin.com/in/michael-seaman-120a59250/">Michael Seaman</a>
[API] <a href="https://www.nps.gov/subjects/developer/index.htm">National Park Service API</a>


# Authors
- Vinita Navani
- Laurel Kidd
- Tina Huang
- Audrey Laititia Kacoutie Veh
- Alicia Hermez
  
  