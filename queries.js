/* Fill out these functions using Mongoose queries*/

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');
/* Connect to your database */
var MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://egs104:group6a@ds047075.mongolab.com:47075/ericryandb', function(err, db){
  if (err) throw err;
});


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
	*/
	Listing.find({ name: 'Library West' }, function(err, listing) {
		if (err) throw err;

		// object of the user
	console.log(listing);
	});

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
	*/
   Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
	if (err) throw err;

	// we have deleted the user
	console.log('Listing deleted!');
	});
   
};
var updatePhelpsMemorial = function() {
	
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
	*/
	Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '1953 Museum Rd, Gainesville, FL 32611, United States' }, function(err, listing) {
		if (err) throw err;

		// we have the updated user returned to us
		console.log(listing);
	});
 
};
var retrieveAllListings = function() {
	
  /* 
    Retrieve all listings in the database, and log them to the console. 
	*/
	Listing.find({}, function(err, listings) {
		if (err) throw err;

		// object of all the users
		console.log(listings);
	});
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();