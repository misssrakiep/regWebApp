const mongoose = require('mongoose');

module.exports = function(mongoUrl) {
  mongoose.Promise = global.Promise;
  console.log(mongoUrl);

  mongoose.connect(mongoUrl, {useMongoClient: true}, function (err) {
if (err) {
  console.log(err);
} else {
  console.log('We are connected to: ' + mongoUrl);
}
  });

  const regSchema = mongoose.Schema({
    plate: String
  });

  const regNumbers = mongoose.model('plate', regSchema);

  return {
    regNumbers
  };
}
