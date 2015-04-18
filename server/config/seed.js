/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

//var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');


User.find(function(err, user) {
if(!user.length) {
    User.create(
        {
            provider: 'local',
            role: 'admin',
            userName: 'Admin',
            email: 'admin@admin.com',
            password: 'admin'
        }, function () {
            console.log('finished populating users');
        }
    );
}
});
