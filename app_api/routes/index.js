var express = require('express');
var router = express.Router();
var ctrlAirplaneData = require('../controllers/airplane');
var ctrlAirportData = require('../controllers/airport');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

/* CLIMB DATA */
router.get('/climbdata/:weight', ctrlAirplaneData.climbDataReadOne);
router.get('/climbdata', ctrlAirplaneData.climbDataReadAll);

/* LANDING DATA */
router.get('/landingData/:weight', ctrlAirplaneData.landingDataReadOne);

/* AIRPORT DATA */
router.get('/airportData', ctrlAirportData.airportDataReadAll);

module.exports = router;
