This Express server ```POST```s JSON data to a "data" directory.  E.g. a ```POST``` to ```/ok_route``` with a body of ```{bodyData: "howdy"}``` will result in a json file stored in ```data/ok_route.json```.

A subsequent ```GET``` request to ```/ok_route`` will return the data stored at ```data/ok_route.json```.
