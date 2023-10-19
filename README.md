# Project Title:
Where Is Robbert?

## Description:
Single-page web app to assist Digital Nomads with figuring out their next spot at campgrounds. Information provided will include Nearest City, Description of the location (do they have hot showers? Is it wheelchair accessible? Do they have RV hookups? Do they allow cats? Does the local ranger’s station have a strong WiFi signal?), and an image to represent the findings.


## Installation
- Clone the repository: git clone 
- Install dependencies: npm install
- Install Mongod
- Set up your environment variables
- Start the server: npm run develop
- MongoDB



## Usage
To run this project locally, follow these steps:
- Clone the repository: git clone 
- Install dependencies: npm install
- Install Mongod
- Set up your environment variables
- Start the server: npm run develop
- MongoDB
  
# Screen Shot Images

<figure>
  <img src="images\Landing Page.jpg" alt="Homepage" style="width:100%"> <figcaption><i>Homepage</i></figcaption>
  </figure>

<figure>
  <img src="images\Login.jpg" alt="Pop-Up Login and SignUp" style="width:100%"><figcaption><i>Pop-Up Login and SignUp</i></figcaption>
</figure> 

<figure>
  <img src="images\Search results.png" alt="Search Results" style="width:100%"><figcaption><i>Search Results</i></figcaption>
</figure>


## License
This project is licensed under the MIT License.

## Features
The project follows the MERN (Interactive MERN Stack Single-Page Application) for a structured repository:
- client/: Contain the public and source.
- source/: Static assets (CSS, images, etc.).
- server/: Contain the config, models, schemas and utils.
- config/: connection.js.
- models/: Campground, index and User.js
 
Environment Variables - Sensitive information, including API keys and database credentials, are stored as environment variables for security. 
We set up the files in the root directory with the following variables:
- DB_HOST=your-database-host
- DB_USER=your-database-username
- DB_PASS=your-database-password
- SESSION_SECRET=your-session-secret 

## Test
Go to Where's Robbert? page (Heroku deployment page)
Create a User Accout
Go to the search box and input a location
Click on the submit search button to see the search results
Click on the reservation button to go to the outsource page

## Technology Used
Node.js
Express.js
React
GraphQL
MongoDB
ODM
National Park Service's API



# Acceptance Criteria
GIVEN that I have an internet signal in my current nomadic location,
WHEN I visit www.whereisrobbert.com, THEN I find a search input box and options to sign up or log in;
WHEN I click on Sign up, THEN I am invited to enter my username, email, and password;
WHEN I click on Login, THEN I am invited to enter my username and password;
WHEN I enter a park name into the search bar, THEN the app responds by providing a list of cards representing campgrounds in or near the park searched;
WHEN I look at the cards, 
THEN I see that the cards display the name of the campground, an image, a URL, a description of the campground, a reservations page link, and the first listed fee for that campground.
WHEN I am also logged into the app, THEN I will also find a button for Save Campground on each campground card.


( TODO: this is in progress as we get things working

# Project Reference
[project page - Heroku] <a href="https://travelgeekalicia-bd545f74fdfc.herokuapp.com/">Where's Robbert?</a>
[GitHub page] <a href="https://github.com/vini3076/prj3-WhereisRobbert">Github Page</a>

# Sources
[Mini-Project: MERN] <a href="https://bootcampspot.instructure.com/courses/3634/pages/21-module-21-mern?module_item_id=971851">Mini-Project: MERN</a>
[Michael Seaman - Linkedin] <a href="https://www.linkedin.com/in/michael-seaman-120a59250/">Michael Seaman</a>
[API] <a href="https://www.nps.gov/subjects/developer/index.htm">National Park Service API</a>


# Authors
- Vinita Navani
- Laurel Kidd
- Tina Huang
- Audrey Laititia Kacoutie Veh
- Alicia Hermez
  

