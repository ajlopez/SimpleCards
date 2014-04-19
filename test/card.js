
var sc = require('..');

exports['create card with initial data'] = function (test) {
    var card = sc.card({ id: 1, name: 'card1', title: 'Card 1' });
    
    test.ok(card);
    test.equal(card.get('id'), 1);
    test.equal(card.get('name'), 'card1');
    test.equal(card.get('title'), 'Card 1');
};