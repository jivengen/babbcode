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
	flaps: Number,
	above20: Boolean,
	weight: Number,
	altitude: Number,
	Vr: Number,
	V2: Number
	
});

mongoose.model('takeoffdata', TakeoffSchema, 'takeoffdata');

var LandingSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	Vapp: Number,
	Vref: Number,
	Vga: Number,
});

mongoose.model('landingdata', LandingSchema, 'landingdata');