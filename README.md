ANIMAL VOTING APP - Flatacuties

Description:

This an app where you can vote for the cutest animal. It's using a local API to build out the frontend for our app. 
This web app allows you as a user to :

1. See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data.

2. Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time. You can either use the character information from your first request, or make a new request to this endpoint to get the character's details.

3.   When viewing an animal’s details, I should be able to add the number of votes for each animal. This number of votes should then be displayed together with the animal’s details. No persistence is needed for the votes.



Setup instructions:

This project reuires data from db.json. So, you might be reuired to install it if you not have the file with you already.

Run the following command to get the backend started:
          json-server --watch db.json

Test your server by visiting this route in the browser:
          http://localhost:3000/characters


