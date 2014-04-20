var content = $("#content");

function show(card) {
    content.empty();
    var title = $("<h1>").html(card.get('title'));
    title.attr('align', 'center');
    content.append(title);
    
    var cards = card.cards();
    
    if (cards)
        cards.forEach(function (subcard) {
            var button = $("<button>").html(subcard.get('title'));
            button.css("minWidth", '95%');
            var div = $("<div>");
            div.append(button);
            div.attr('align', 'center');
            content.append(div);
        });
}