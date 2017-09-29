var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/" + process.argv[2], function(err, db) {
  db.collection('users').update({
    "username": "tinatime"
  }, {
    $set: {
      "age": 40
    }
  }, function(err, data) {
    if (err) {
      throw err;
    }
  });
  db.close();
});
