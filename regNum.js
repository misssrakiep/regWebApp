 module.exports = function(models) {
   const regBox = [];
   const regObj = {};

   const index = function(req, res, next) {
     var plate = req.body.plateInput;
     var newPlate = {
       plate : plate
     };
     res.render('reg_home', {});
   };

   const viewScreen = function(req, res, next) {
     var plate = req.body.plateInput;
     var newPlate = {
       plate : plate
     };

     models.regNumbers.find({}, function(err, result) {
       if (err) {
         console.log(err);
       } else {
         res.render('reg_view', {
           plate : plate
         });
       }
     })
   }

   const addReg = function(req, res, next) {
     var plate = req.body.plateInput;
     var newPlate = {
       plate : plate
     };

     models.regNumbers.findOne({
       plate : req.body.plateInput
     }, function(err, result) {
       console.log('Found this plate');
       console.log(plate);
       if(err) {
         return done(err);
       }

       if (result === null) {
         console.log('No reg found');
         models.regNumbers.create({
           plate : req.body.plateInput
         }, function(err, result) {
           console.log('New reg added to database');
           console.log(arguments);
           if (err) {
             return done(err);
           }
         })
       }

       if (result !== null) {
         console.log('We have reached the end');
       }
        res.render('reg_create', {
          plate : plate
        })

     })
   }
   return {
     index,
     viewScreen,
     addReg
   }
 }
