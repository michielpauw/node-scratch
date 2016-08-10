var models = require('../app/models'),
    md5 = require('MD5');

module.exports = {
    index: function(req, res) {
        models.User.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.User.find({ _id: req.params.id }, function(err, user) {
            if (err) {
                res.json({error: 'User not found.'});
            } else {
                res.json(user);
            }
        });
    }
};