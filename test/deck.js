
var sc = require('..');

exports['create deck with one card'] = function (test) {
    var deck = sc.card({ });
    var card = sc.card({ id: 1, name: 'card1', title: 'Card 1' });
    deck.add(card);
    
    var cards = deck.cards();
    
    test.ok(cards);
    test.ok(Array.isArray(cards));
    test.equal(cards.length, 1);
    
    var result = cards[0];
    
    test.equal(result.get('id'), 1);
    test.equal(result.get('name'), 'card1');
    test.equal(result.get('title'), 'Card 1');
};

