'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
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


/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

 fs.readFile('listings.json', 'utf8', function(err, data) {
   var listingsData = JSON.parse(data);
   console.log(listingsData["entries"].length);
    for (var i = 0; i < listingsData["entries"].length; i++)
    {
        var newListing = new Listing();
        newListing.code = listingsData["entries"][i].code;
        newListing.name = listingsData["entries"][i].name;

        if (listingsData["entries"][i]["coordinates"]){
          newListing.coordinates.latitude = listingsData["entries"][i]["coordinates"].latitude;
          newListing.coordinates.longitude = listingsData["entries"][i]["coordinates"].longitude;
        }
        if (listingsData["entries"][i]["address"]){
          newListing.address = listingsData["entries"][i].address;
        }

        console.log(newListing);

        newListing.save(function(err) {
          if (err) {
            throw err;
          }
          else {
            console.log('Listing created!')
          };
        });
    }
        console.log("Done");
 });

// save the listing
// newListing.save(function(err) {
//   if (err) throw err;
//
//   console.log('Listing created!');
// });


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
