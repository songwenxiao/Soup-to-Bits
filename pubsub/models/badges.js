'use strict';

var redis = require('../lib/redis');

/**
 *   Save badges to database
 *   @param {Array} badges
 *   @param {Function} callback
 */

export.save = function(badges, callback){
	if(!badges.length) return callback(null, null);
	var badge = badges.pop();
	redis.lpush('badges', JSON.stringigy(badge),function(err){
		if(err) return callback(err, null);
		exports.save(badges, callback);
	});

};
