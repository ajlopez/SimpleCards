
var sc = require('..');

exports['load simple json'] = function (test) {
    var json = require('./simple.json');
    var result = sc.load(json);
    
    test.ok(result);
    test.equal(result.get("id"), json.id);
    test.equal(result.get("name"), json.name);
    test.equal(result.get("title"), json.title);
};

