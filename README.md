# Natours-Website-Using-Node-JS-Express-and-MongoDB

Hello everyone,

This repository contains the code files of a tour website called "Natours". The database used in this webiste is "MongoDB" and the backend framework used is "Node Js".The 

framework for front-end used is called "Pug".

The project will run on : http://127.0.0.1/api/v1

The functionalities that can be achieved with this website are:

=> Users can sign up as "user" , "guide" or "lead-guide" on this website.

=> Users can login to their account using their email and passwordd.

=> User can browse through numerous tours and can book the tour of their liking.

=> The booking of the tours is achieved through the payment integration of "Stripe API".

=> The users can also check their booking in the user profile section.

=> Moreover, the user can edit their username, email and password in the user profile section.

# <- How to run the project ->

=> Download the project from the github repository and open it in Vs Code Editor.

=> Download the "Node Js" installer from your web-browser and install it on your system.

=> Open the integrated terminal in the Vs code and initialize the project by typing the command "npm init".

=> Press "Enter" and you will shown multiple options about the description of the project. Set your prefered description about the project and press enter.

=> After initalizing, you have install multiple npm packages/dependencies that are given below:

  #### ->"@babel/polyfill": "^7.12.1",
  
  #### ->"@stripe/stripe-js": "^3.0.3",
  
  #### ->"axios": "^1.6.7",
  
  #### ->"bcryptjs": "^2.4.3",
  
  #### ->"cookie-parser": "^1.4.6",
  
  #### ->"dotenv": "^7.0.0",
  
  #### ->"express": "^4.16.4",
  
  #### ->"express-mongo-sanitize": "^1.3.2",
  
  #### ->"express-rate-limit": "^3.5.0",
  
  #### ->"helmet": "^3.16.0",
  
  #### ->"hpp": "^0.2.2",
  
  #### ->"html-to-text": "^9.0.5",
  
  #### ->"jsonwebtoken": "^8.5.1",
  
  #### ->"mongoose": "^5.13.22",
  
  #### ->"morgan": "^1.9.1",
  
  #### ->"multer": "^1.4.5-lts.1",
  
  #### ->"nodemailer": "^6.9.9",
  
  #### ->"parcel-bundler": "^1.12.5",
  
  #### ->"pug": "^3.0.2",
  
  #### ->"sharp": "^0.33.2",
  
  #### ->"slugify": "^1.3.4",
  
  #### ->"stripe": "^7.63.1",
  
  #### ->"validator": "^10.11.0",
  
  #### ->"xss-clean": "^0.1.1"
  
  #### (Note: I have also specified the exact dependency version that I used to build the project.)
  
After downloading all the above dependencies in your project, you can view then in your "package.json" file.

Now comes the step to connect your database. Since, Cloud database is used, head over to MongoDB website and sign up on it.

After creating the account, head over to the given website and follow the steps to integrate your cloud database into your project.
  
  #### ->URL: https://hevodata.com/learn/mongodb-atlas-nodejs/

After you have made your database cluster, copy the connection string and paste it in the DATABASE variable in the "config.env" file.

Also paste the password of your cloud database in the "password" field of your connection string.

If you did all the steps correctly, then your cloud database will be connected successfully with your Node js project.

# Finally, there are 4 database collections called:

->Users,

->Tours,

->Reviews,

->Bookings.

# Project Structure:

Moreover, this project is built upon "Model, View and Controller Architecture". The "Model" files contains all the models/schemas and middleware functions of each of the database connection. The "Controller" files contains all the necessary functionalities related to each model. The "View" files contains the front-end code files. The user authentication is achieved through "JWT Web Tokens".

There is another user type called "admin" that can manage all the users, add tours, edit tours and remove users. To sign up as an admin, you will have to achieve it through an application called "Postman" where you can make the required API call.
Feel free to use this project and be sure to reach out to if you face any difficulty in setting up the project or if you want to work together on any other Node Js projects.
You can find my social media accounts in my profile description.

# Project Images:

  ## Homepage:
  
<img width="1388" alt="Screenshot 2024-07-09 at 2 48 05 PM" src="https://github.com/RahimAbbas55/Natours-Website-Using-Node-JS-Express-and-MongoDB/assets/101935846/c38b9976-a1db-4e56-a465-97ffa5ae0139">

  ## Login:
  
<img width="1383" alt="Screenshot 2024-07-09 at 2 48 20 PM" src="https://github.com/RahimAbbas55/Natours-Website-Using-Node-JS-Express-and-MongoDB/assets/101935846/f50ce85c-0223-4020-a13b-3c4847cb7288">

  ##Sign Up:
  
<img width="1385" alt="Screenshot 2024-07-09 at 2 48 36 PM" src="https://github.com/RahimAbbas55/Natours-Website-Using-Node-JS-Express-and-MongoDB/assets/101935846/5dca1e47-63fd-4079-b324-5fb54ae92709">


Ps: All the required URLs are given in the specified router files.

Happy Coding!
