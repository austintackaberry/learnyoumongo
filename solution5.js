var mongo = require('mongodb').MongoClient;
var jsonName = {
   "firstName": process.argv[2],
   "lastName": process.argv[3]
};
mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  db.collection('docs').insert( jsonName, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(JSON.stringify(jsonName));
  });
  db.close();
});
