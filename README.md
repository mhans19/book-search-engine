# <div align="center">**BOOK-SEARCH-ENGINE**</div>

## **TABLE OF CONTENTS**    
[1. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
[2. LICENSE](#LICENSE)  
[3. PROJECT DESCRIPTION](#PROJECT-DESCRIPTION)  
[4. APPLICATION LINKS](#APPLICATION-LINKS)  
[5. CONTRIBUTIONS](#CONTRIBUTIONS)  
[6. DEVELOPMENT](#DEVELOPMENT)  
[7. INSTALLATION](#INSTALLATION)   
[8. USAGE](#USAGE)   
[9. TESTING](#TESTING)  
[10. USER STORY](#USER-STORY)  
[11. ACCEPTANCE CRITERIA](#ACCEPTANCE-CRITERIA)   
[12. GRADING REQUIREMENTS](#GRADING-REQUIREMENTS)    
[13. FUNCTIONALITY](#FUNCTIONALITY)  

---

## **LICENSE**  
![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
> This application is covered under the [MIT License](https://opensource.org/licenses/MIT)    

---

## **PROJECT DESCRIPTION**
> The purpose of this challenge was to take a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a [React](https://reactjs.org/) front end, [MongoDB](https://www.mongodb.com/) database, and [Node.js](https://nodejs.org/en/)/[Express.js](https://expressjs.com/) server and API. 

---

## **APPLICATION LINKS**
> [Live Application](https://dry-ocean-07418.herokuapp.com/)   
> [GitHub Repository](https://github.com/mhans19/book-search-engine)  

---

## **CONTRIBUTIONS**   
Please contact **MORGAN HANSEN** for all application inqueries.
| Email | GitHub | LinkedIn |  
| :------: | :------: |  :------: |  
| <mdhansen19@gmail.com> | [GitHub](https://github.com/mhans19?tab=repositories) |  [LinkedIn](https://www.linkedin.com/in/morgan-hansen-47235872/?challengeId=AQF6MR471a-pZgAAAXMTL5e4xLqg_LNW5yawcXgk_uUmLrzsXk5ehOnzlQuK2dOVeX4ARtJwxmcHQrQhtgL_jM96wbBzhLvmAA&submisksionId=813167e8-8027-1e16-5911-1c143c23561f) |  
  
---

## **DEVELOPMENT**  


[React](https://reactjs.org/) front end, [MongoDB](https://www.mongodb.com/) database, and [Node.js](https://nodejs.org/en/)/[Express.js](https://expressjs.com/) server and API. 



This application was developed with the following application structures:  
1. [React.js](https://reactjs.org/)  
    + [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
2. [MongoDB](https://www.mongodb.com/)
    + [Mongoose](https://mongoosejs.com/docs/)
3. [Node.js](https://nodejs.org/en/)
4. [Node Package Manager (NPM)](https://www.npmjs.com/)
    + [concurrently](https://www.npmjs.com/package/concurrently)
    + [if-env](https://www.npmjs.com/package/if-env)
    + [bcrypt](https://www.npmjs.com/package/bcrypt)
    + [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    + [nodemon](https://www.npmjs.com/package/nodemon)
    + [Express.js](https://expressjs.com/)
    + [apollo-server-express](https://www.npmjs.com/package/apollo-server-express)
5. [graphQL](https://graphql.org/)
6. [JavaScript (js)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   
7. [jQuery](https://jquery.com/)   
8. [Cascading Style Sheets (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS)
9. [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
10. [Hypertext Markup Language (HTML)](https://developer.mozilla.org/en-US/docs/Web/HTML)
11. [Heroku](https://dashboard.heroku.com/)

---

## **INSTALLATION**
> This online application does not require any installation prior to running.   
However, if interested in contributing to the application, a user *must* complete the following:  
> 1. Download the [GitHub repository](https://github.com/mhans19/book-search-engine) to a local repository. 
> 2. [Install dependencies](#DEVELOPMENT) such as Node.js and NPM packages.   

---

## **USAGE**
> The application is deployed with Heroku and available for immediate use. Simply navigate to the application by following the [application link](https://dry-ocean-07418.herokuapp.com/).

---

## **TESTING**
> During development efforts, [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/) was used to test queries and mutations.   

---

## **USER STORY**  
> AS AN avid reader  
> I WANT to search for new books to read  
> SO THAT I can keep a list of books to purchase    
---

## **ACCEPTANCE CRITERIA**
> GIVEN a book search engine  
> WHEN I load the search engine  
> THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
> WHEN I click on the Search for Books menu option  
> THEN I am presented with an input field to search for books and a submit button  
> WHEN I am not logged in and enter a search term in the input field and click the submit button  
> THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site  
> WHEN I click on the Login/Signup menu option  
> THEN a modal appears on the screen with a toggle between the option to log in or sign up  
> WHEN the toggle is set to Signup  
> THEN I am presented with three inputs for a username, an email address, and a password, and a signup button  
> WHEN the toggle is set to Login  
> THEN I am presented with two inputs for an email address and a password and login button  
> WHEN I enter a valid email address and create a password and click on the signup button  
> THEN my user account is created and I am logged in to the site  
> WHEN I enter my account’s email address and password and click on the login button  
> THEN I the modal closes and I am logged in to the site  
> WHEN I am logged in to the site  
> THEN the menu options change to Search for Books, an option to see my saved books, and Logout  
> WHEN I am logged in and enter a search term in the input field and click the submit button  
> THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account  
> WHEN I click on the Save button on a book  
> THEN that book’s information is saved to my account  
> WHEN I click on the option to see my saved   
> THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account  
> WHEN I click on the Remove button on a book  
> THEN that book is deleted from my saved books list  
> WHEN I click on the Logout button  
> THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button    

---

## **GRADING REQUIREMENTS**
#### <div align="center">This Challenge is graded based on the following criteria:</div>
### **<div align="center">Acceptance Criteria: 40%</div>**
- [x] Satisfies all of the preceding acceptance criteria plus the following:
- [x] Has an Apollo Server that uses GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.  
- [x] Use an Apollo Server and apply it to the Express.js server as middleware.
- [x] Include schema settings for resolvers and typeDefs as outlined in the Challenge instructions.
- [x] Modify the existing authentication middleware to work in the context of a GraphQL API.
- [x] Use an Apollo Provider so that the application can communicate with the Apollo Server.
- [x] Application must be deployed to Heroku.

### **<div align="center">Deployment: 32%</div>**
- [x] Application deployed at live URL.
- [x] Application loads with no errors.
- [x] Application GitHub URL submitted.
- [x] GitHub repository contains application code.

### **<div align="center">Application Quality: 15%</div>**
- [x] User experience is intuitive and easy to navigate.
- [x] User interface style is clean and polished.
- [x] Application resembles the mock-up functionality provided in the Challenge instructions.

### **<div align="center">Repository Quality: 13%</div>**
- [x] Repository has a unique name.
- [x] Repository follows best practices for file structure and naming conventions.
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages.
- [x] Repository contains quality README file with description, screenshot, and link to deployed application.

---

## **FUNCTIONALITY**  
1. In an internet browser, navigate to [deployed application](https://dry-ocean-07418.herokuapp.com/).
![](assets\images\Screenshot.PNG)  