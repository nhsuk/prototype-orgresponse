// External dependencies
const express = require('express');
const router = express.Router();


// Documentation router
router.get('/', function(req , res){ 
    res.render('index');
  });
  
  
  // Branching
  
  // To Level 2
  router.post('/process-response', function (req, res) {
    let response = req.body.yourresponse;
  
    if (response == '') {
      res.redirect('/org-response/response-error')
    } 
    else {
      res.redirect('/org-response/response-confirm')
    }
  });
  

// Add your routes here - above the module.exports line

module.exports = router;
