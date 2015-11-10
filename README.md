HTTP Server With Persistence
============================
To complete this assignment:
  * fork this repository (the sub module for this specific assignment)
  * clone down your fork
  * place all of your work in a folder that is your full name, use `_`s instead of spaces
  * push back up to your fork
  * create a pull request back to the original repo
  * submit a link to the PR in canvas

Assignment Description
--------------------------
For this assignment, write an http server that will act as a simple data store.

It should respond to GET/POST requests for a single route and 
the data coming in from a post request should be saved to a json file in 
a data folder in your repository. DO NOT commit your data folder to git. For example
 if a request is sent to "/note_one" with a body of {noteBody: 'hello world'} 
the json data in the body should be stored in it's own json file `data/note_one.json`. 
A get request to the same route should return the data contained in the json file.

Rubric:

Handles REST requests: 3pts
JSON storage: 3pts 
Tests: 2pts
Project Organization and Development Files: 2pts
