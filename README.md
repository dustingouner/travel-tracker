## About
Travel Tracker is a locally-hosted, web-based application designed to help users track pending/past trips and have the ability to estimate or book a new trip. A user can login to their own home page by entering their username and password in the login form. Travelers will first see their past/pending trips and a total amount spent to date on trips. 

---

## Set Up 

### Installing the files
 - Fork this [repository](https://github.com/dustingouner/travel-tracker.git) to your GitHub account. 
 - In your forked respository, click the `code` drop-down menu and copy the SSH key.
 - On your local machine, open the terminal and navigate to the location you'd like the repository directory cloned to. 
 - Once you're there, run `git clone [SSH Key] [travel-tracker]` via the command line.
 - Run `npm install`. 

### Opening the application
 - When you're ready to use the app, open the terminal and navigate to the travel-tracker directory via the terminal.
 - In the terminal, use command+t to open a new terminal tab. 
 - In the new terminal tab, run `npm start`.
 - Once WebPack has compiled the necessary resources, you will see a link within the text of your terminal. You can copy and paste that link into your browser to access a locally-hosted version of this application on your machine. 

---

## Preview

![travel-tracker-final](https://user-images.githubusercontent.com/117230717/234349617-47e22846-d63d-42b0-8711-8739ca6f5742.gif)


---

## Contributors

Dustin Gouner  [GitHub](https://github.com/dustingouner) | [LinkedIn](https://www.linkedin.com/in/dustin-gouner/)

---

## Context
This was my final solo project while in Mod 2 at [Turing School of Software and Design Front End Web Development program](https://frontend.turing.edu/), a four- module, seven-month course focused on preparing students for a career as web developers working with Javascript, HTML, CSS, and the React framework. The application was built over the course of five days, during which I also completed final technical assessments to move on to Mod 3. Travel Tracker accesses remote serve data, and was written utilizing JavaScript, HTML, CSS, and WebPack bundler. The development process leaned heavily on test-driven development, especially in its earliest stages. 

---

## Goals and Challenges 
The primary goal of this project was for me to synthesize and showcase my learning as a new developer. Building the Travel Tracker application required me to apply all of the skills, technologies, and tools that I had become familiar with, challenging me to implement my learning on a broader scale and at a deeper level than in any previous project at Turing. Additionally, I had to integrate a few novel tools and functionalities, such as fetching API data and using the bundler WebPack, error handling, and user-specific login capabilities. Setting up a login screen that could fetch API data on page load and use conditionals to verify username and password presented several new challenges. As always, CSS can be a challenging aspect when attempting to add new features to a page, such as a media scroller and properly sizing photo cards with information.

## Future Development Opportunities
Given more time, I would have prioritized enhancing the travel-tracker application by incorporating additional functionality, strengthening accessibility, and incorporating more interactive elements. Specifically, I would have implemented a modal box to display upon clicking the estimate cost button, as well as integrating npm libraries to showcase the trip cards in a more visually engaging manner, such as a glider. Another significant addition would be incorporating a separate login set specifically for agents to approve pending trips and enable the user to select which trip category to display on the page. These enhancements would improve the application's overall usability and user experience, providing a more seamless and intuitive experience for users while demonstrating my proficiency in leveraging advanced tools and technologies.
