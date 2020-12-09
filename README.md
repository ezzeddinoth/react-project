# react-project

Sample project with very simple design, consumes REST-API from "Arbeitsprobe".
in Case of login, it just alert wether the user admin or customer, no further session-change or redirction.
Order, Product, Person, EleganOrder: shows the REST-API findAll() correspondly.

Service: cunsumes the Rest-API, and offer the data in Javascript.

Component: offer Components used multiple time in View. 
Hier just Component Table to be concidered, it creates dynamic table (number of Columns and name of Columns, number of rows an data in row depend on data delivered in props).

View: for each page in user interface, takes data from Service and pack it into Component. 
In this place some more function could be defined to make the page more dynamic for the user needs.

To run the project clone it then use npm start.




