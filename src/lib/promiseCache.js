var RSVP = require('rsvp');
var cache = require('memory-cache');

function promiseCache(key, ttl, fn) {

  var promise = new RSVP.Promise(
    function(resolve, reject) {
      var previouslyCached = cache.get(key);
      if (null !== previouslyCached) {
        console.log('cache hit');
        resolve(previouslyCached);
        return;
      }

      fn()
        .then(function(res) {
          console.log('cache miss');
          cache.put(key, res, ttl);
          resolve(res);
          return;
        }, function(err) {
          reject(err);
          return;
        });
    });

  return promise;
}

module.exports = promiseCache;