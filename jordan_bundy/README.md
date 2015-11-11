s assignment, write an http server that will act as a simple data store.

It should respond to GET/POST requests for a single route and 
the data coming in from a post request should be saved to a json file in 
a data folder in your repository. DO NOT commit your data folder to git. For example
if a request is sent to "/note_one" with a body of {noteBody: 'hello world'} 
the json data in the body should be stored in it's own json file `data/note_one.json`.  
A get request to the same route should return the data contained in the json file.

MY INSTRUCTIONS:

launch `node server.js`
send a post request to localhost:3000/data
check the file at data/input.json, it will include your input

