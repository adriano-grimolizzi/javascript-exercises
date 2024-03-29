# Hogwarts Server
This is a simple Node.js example application.

## Description
This application will expose a Rest API that will return data fetched from a Rest API mocking website called Beeceptor. It uses Express to expose the data and Axios to fetch data from Beeceptor.

## Getting Started
### Dependencies
As every Node application you should have Node.js and npm installed on your machine. 
### Installing
Run ```npm i``` to install its dependencies.
### Testing
You can run the Jest unit tests with ```npm run test```.
### Executing the program
Run ```npm run start``` to start the application. You can then go to http://localhost:3000/wizards to get the data. You can use ```npm run dev``` to use nodemon for hot reload.

## Author
Adriano Grimolizzi

## Acknowledgments
Useful articles, tutorials:
* [3 Ways To Mock Axios In Jest](https://www.vhudyma-blog.eu/3-ways-to-mock-axios-in-jest/)
* [A simple README.md template](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)
* [Testing Routes and Controllers](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/testing-routes-and-controllers)
