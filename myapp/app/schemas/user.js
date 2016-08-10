var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
	
module.exports = {
	newUser: new Schema({
	    email:      { type: String },
	    name: {
	        first:  { type: String },
	        last:   { type: String }
	    },
	    phone:      { type: String },
	    gravatar:   { type: String }
	})
};