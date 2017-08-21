 module.exports = function(models) {
   const regBox = [];
   const regObj = {};

   const index = function(req, res, next) {
     var plate = req.body.plateInput;
     var city = req.body.city;
     var newPlate = {
       plate : plate,
       city : city
     };
     res.render('reg_home', {});
   };

   const viewScreen = function(req, res, next) {
     var plate = req.body.plateInput;
     var city = req.body.city;
     var search = req.body.regSearch;
     var newPlate = {
       plate : plate,
       city : city
     };

     models.regNumbers.find({"city" : search}, function(err, result) {
       if (err) {
         console.log(err);
       } else {
         console.log(result);
         res.render('reg_view', {
           plate : result
         });
       }
     })
   }

   const addReg = function(req, res, next) {
     var plate = req.body.plateInput;
     var city = req.body.city;

     var newPlate = {
       plate : plate,
       city : city
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
           plate : req.body.plateInput,
           city : req.body.city

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
          plate : plate,
          city : city
        })

     })
   }
   return {
     index,
     viewScreen,
     addReg
   }
 }
