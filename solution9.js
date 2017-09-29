var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  db.collection("prices").aggregate([
    { $match: { size: process.argv[2] }},
    { $group: {
      _id: 'average'
    , total: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) {
      throw err;
    }
    console.log(Number(results[0].total).toFixed(2));
  });
  db.close();
});
