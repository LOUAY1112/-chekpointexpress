//variables defined
const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const fs = require('fs');
const pug = require('pug');





//express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());  // pour url whose whriten search bar when  we got the  files or  webpage








//PUG specific stuff
app.set('view engine' ,pug)
app.set('views',path.join(__dirname,'views')) //that we have take the files  path directory


//EMPONINTS
app.get('/', (req, res) => {
    res.status(200).render('index.pug');

});
//start server 
app.listen(port, () => {
    console.log('application start on port', port);

})
