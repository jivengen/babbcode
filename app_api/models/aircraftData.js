var mongoose = require('mongoose');

var ClimbSchema = new mongoose.Schema({
	weight: Number,
    vfriFlap5: Number,
    vfriFlap10: Number,
    vfriFlap15 : Number,
    vClmb : Number
});

mongoose.model('climbdata', ClimbSchema, 'climbdata');

var TakeoffSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	vr: Number,
	v2: Number,
	atOrBelow20: Boolean,
	above20: Boolean,
	altitude: Number,
});

mongoose.model('TakeoffData', TakeoffSchema, 'TakeoffData');

var LandingSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	vApp: Number,
	vRef: Number,
	vGa: Boolean,
});

mongoose.model('LandingData', LandingSchema, 'LandingData');