
## API used

https://dummyjson.com/docs/todos

## General concepts

* Create a new page on localhost:3000/test
* Using locahlhost:3000/test?name="Mos Craciun&age="200" capture the name parameter and save it in a useState
* Create a React Server Component. How do we know that it is running on the server?
* Create a card and using tailwind:
    * add a gray background
    * add a shadow
    * add 2 elements and align them in the center using flex box.
    * make the elements get the data from the useState.
    * add one button and animate it's hover transition
    * use the button to submit data in a form. 
* Retrieve all the users from in the RSC https://dummyjson.com/docs/users
## Bugs

* The GET call throws a 404. 
    * Throw a meaningful error and inform the user that an error has occured.
    * Fix the error 
* The GET call returns 5 results for one page while it should return 10 results.
* 
## Features

* As a user, I want to create a new todo.
    * I want to be able to set the todo description
    * I want to be able to set completed false/true
* As a user, I want to update a todo.
    * I want to update the name
    * I want to update the completed state
* As a user, I want to delete a todo.
* Add a new dynamic page for localhost:3000/[id]. Redirect to it by clicking on one todo from the homepage
* Add a middleware that prints some information whenever the localhost:3000/[id] is accessed but not the homepage

## Extra

* Use parralel routes to render both the info of one todo but also the info of dummyjson.com/users/me
* Add pagination
