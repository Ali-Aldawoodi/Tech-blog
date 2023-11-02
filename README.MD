## Tech Blog

## Description
User will initially be greeted with a homepage that lists out a few current blogposts. At the top left hand cornder, user will see one login button. Upon clicking the button, user will be directed towards the login and signup page in which they can enter in information into either form and then be redirected to the homepage. Once back on the homepage, user will now see a logout button as well as a button to create a new blogpost. Once user click the button to create a blogpost, they will be redirected to another page where they will be able to write their name and blogpost content in the corresponding fields.

## Collaborators
AskBCS

## Screenshots
![Alt text](image.png)
![Alt text](image-1.png)
![Alt text](image-2.png)

## Links
Github - https://github.com/Ali-Aldawoodi/Tech-blog
Heroku - https://tech-blog99-234f508c5521.herokuapp.com/

<!-- 
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
    // I need to create a dashboard button

WHEN I click on the homepage option
THEN I am taken to the homepage
    // GOOD

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
    // In my views need a if statement if user clicks on these buttons then log in

WHEN I choose to sign up
THEN I am prompted to create a username and password
    // GOOD

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
    // GOOD

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
    // GOOD... i think?

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
    // Need the dashboard button up

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
    // GOOD except for the time stamp

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    // Need a route that renders the blogpost in another page. So I need functionality of when the post is clicked as well as a route and view to render it
    // I need a leave a comment form

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
    // I need a post route here that posts the comment to the comment array.length

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
    // I need a route that renders the dashboard then another route that shows any blogposts I have created. Ill move the create a blogpost here.

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
    // GOOD

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
    // Soo this would also be a post route to the array.length of my blogposts

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
    // This would be a delete and put route and then a refresh of the dashboard page

WHEN I click on the logout option in the navigation
THEN I am signed out of the site
    // GOOD

WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts 
    // I think good for the timeout part but double check the post manipulation parts
    --> 
    