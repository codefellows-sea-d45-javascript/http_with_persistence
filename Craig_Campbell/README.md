This Express server ```POST```s JSON data to a "data" directory.  E.g. a ```POST``` to ```/ok/somename``` with a body of ```{bodyData: "howdy"}``` will result in a json file stored in ```data/somename.json```.

A subsequent ```GET``` request to ```/ok/somename``` will return the data stored at ```data/somename.json```.
