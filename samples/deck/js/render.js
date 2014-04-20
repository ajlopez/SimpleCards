var content = $("#content");

function show(card, previous) {
    content.empty();
    
    if (previous) {
        var back = $("<button>").html('Back');
        back.click(function () { show(previous); });
        content.append(back);
    }
    
    var title = $("<h1>").html(card.get('title'));
    title.attr('align', 'center');
    content.append(title);
    
    var text = card.get('text');
    
    if (text) {
        var divtext = $("<div>").html(text);
        content.append(divtext);
    }
    
    var cards = card.cards();
    
    if (cards)
        cards.forEach(function (subcard) {
            var button = $("<button>").html(subcard.get('title'));
            button.css("minWidth", '95%');
            button.click(function () { show(subcard, card); });       
            var div = $("<div>");
            div.append(button);
            div.attr('align', 'center');
            content.append(div);
        });
}