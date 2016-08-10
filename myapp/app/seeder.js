var mongoose = require('mongoose'),
    models = require('./models'),
    md5 = require('MD5');

module.exports = {
    check: function() {
        models.User.find({}, function(err, users) {
            if (users.length === 0) {
                console.log('no users found, seeding...');
                var newUser = new models.User({
                    email: 'jkat98@gmail.com',
                    name: {
                        first: 'Jason',
                        last: 'Krol'
                    },
                    phone: '215-123-1234',
                    gravatar: md5('jkat98@gmail.com')
                });
                newUser.save(function(err, user) {
                    console.log('successfully inserted user: ' + user._id);
                });

                newUser = new models.User({
                    email: 'testerson@example.com',
                    name: {
                        first: 'Steve',
                        last: 'Testerson'
                    },
                    phone: '215-123-1234',
                    gravatar: md5('testerson@example.com')
                });
                newUser.save(function(err, user) {
                    console.log('successfully inserted user: ' + user._id);
                });

                newUser = new models.User({
                    email: 'nancy@testerson.com',
                    name: {
                        first: 'Nancy',
                        last: 'Testerson'
                    },
                    phone: '215-123-1234',
                    gravatar: md5('nancy@testerson.com')
                });
                newUser.save(function(err, user) {
                    console.log('successfully inserted user: ' + user._id);
                });
            } else {
                console.log('found ' + users.length + ' existing users!');
            }
        });
    }
};
