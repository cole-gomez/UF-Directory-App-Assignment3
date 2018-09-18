/* Fill out these functions using Mongoose queries*/
const mongoose = require('mongoose'),
Schema = mongoose.Schema,
data = require('./ListingSchema.js'),
config = require('./config');

mongoose.connect('mongodb://CEN3031:CEN3031TA@ds161062.mlab.com:61062/assignment3app');


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

  var libWestData = data.find({name: 'Library West'}, (err, list) => {
    if(err) throw err;
    console.log(JSON.stringify(list));
  });
};


var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This coresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  
  var cablData = data.find({code: 'CABL'}, (err, list) => {
    
    if(err) throw err;
    data.remove(cablData,err);
    console.log('deleted CABL');
    if(err) throw err;
  });
}



var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  
  var newAddress = '1953 Museum Rd, Gainesville, FL 32603';
  var updated =  data.findOneAndUpdate(
    {address: '701 N Broadway, Sleepy Hollow, NY 10591, United States'},
    {newAddress}/*   < replaces ^    */ , function (err,list){
      
      if(err) throw err;
      console.log(newAddress);
    });
  };



var retrieveAllListings = function() {
   /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  
  for(var i=0 ; i<data.length ; i++) {
    console.log(data[i]);
  }
};




findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
