var mongoose = require('mongoose'),
	user = require('./schemas/user'),
	game = require('./schemas/game');

var User = user.newUser;
var Game = game.newGame;

module.exports = {
    User: mongoose.model('User', User)
};
