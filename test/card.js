
var sc = require('..');

exports['create card with initial data'] = function (test) {
    var card = sc.card({ id: 1, name: 'card1', title: 'Card 1' });
    
    test.ok(card);
    test.equal(card.get('id'), 1);
    test.equal(card.get('name'), 'card1');
    test.equal(card.get('title'), 'Card 1');
};

exports['get undefined value as null'] = function (test) {
    var card = sc.card({ });
    
    test.ok(card);
    test.strictEqual(card.get('foo'), null);
};

exports['get keys'] = function (test) {
    var card = sc.card({ id: 1, name: 'card1', title: 'Card 1' });
    
    test.ok(card);
    
    var keys = card.keys();
    
    test.ok(keys);
    test.ok(Array.isArray(keys));
    test.equal(keys.length, 3);
    test.equal(keys[0], 'id');
    test.equal(keys[1], 'name');
    test.equal(keys[2], 'title');
};
