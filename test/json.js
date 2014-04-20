
var sc = require('..');

exports['load simple json'] = function (test) {
    var json = require('./simple.json');
    var result = sc.load(json);
    
    test.ok(result);
    test.equal(result.get("id"), json.id);
    test.equal(result.get("name"), json.name);
    test.equal(result.get("title"), json.title);
};

exports['load card with cards'] = function (test) {
    var json = require('./person.json');
    var result = sc.load(json);
    
    test.ok(result);
    test.equal(result.get("name"), json.name);
    
    var father = result.get("father");
    
    test.ok(father);
    test.equal(father.get("name"), json.father.name);
    
    var mother = result.get("mother");
    
    test.ok(mother);
    test.equal(mother.get("name"), json.mother.name);
};

exports['load deck'] = function (test) {
    var json = require('./deck.json');
    var result = sc.load(json);
    
    test.ok(result);
    test.equal(result.get("title"), json.title);
    
    var cards = result.cards();
    
    test.ok(cards);
    test.ok(Array.isArray(cards));
    test.equal(cards.length, json.cards.length);
    
    for (var n in cards) {
        var card = cards[n];
        test.ok(card);
        test.equal(card.get("title"), json.cards[n].title);
    }
};

