'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://CEN3031:CEN3031TA@ds161062.mlab.com:61062/assignment3app');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

fs.readFile('listings.json', 'utf8', (err, data)=> {
  
if(err) throw err;

const list = JSON.parse(data).entries;

var listingObjects;

  for(var i=0 ; i<list.length ; i++){
    listingObjects = new Listing(list[i]).save((err,listing) => {
      if (err) throw err;
      console.log('Saved');
    });
  }
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */