# Note Taker Application
The following document details the function and construction of an application that allows a user to write, save, and retreive short text notes.  This application uses Node JS, & JASON on the backend, and HTML & CSS on the front end. 

# Function
When a user opens the application in their browser window, it will read all information in the file 'db.json' to retreive any saved notes and display them on screen.  If there are no previously save notes, the user will be able to create and then save new notes by clicking the save icon in the upper right corner of the screen.  This will trigger a function that will change the values of data stored in the db.json file. Additionally, the user may also edit existing notes by click on any of the saved note entries, list in the left-hand pannel on the notes page.  This will give the user an opportunity to edit the label and content of the selected note.

# Dependencies
This application requires the following dependency packages, which can be installed using the node command 'node npm install'

Required Dependencies:

* Body-parser
* Express
* Nodemon
* Path
* Shortid
* Util


# Operation
To run this application, open the root folder of this application in any GitBash window (on windows) or Terminal window (on Mac) and type the following node command 'npm start'.  This will activate the virtual server on Port 3000.  Next, open a web browser and enter the following the folling information in the URL search bar: http://localhost/3000
