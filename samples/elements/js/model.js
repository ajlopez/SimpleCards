
var model = {
    title: "Elements",
    
    cards: [
        { 
            title: "Oxygen", 
            text: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetallic element and oxidizing agent that readily forms compounds (notably oxides) with most elements.[1] By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.[2] At STP, two atoms of the element bind to form dioxygen, a diatomic gas that is colorless, odorless, and tasteless, with the formula O2",
            url: "http://en.wikipedia.org/wiki/Oxygen",
            image: "http://upload.wikimedia.org/wikipedia/commons/c/c0/Oxygen_molecule.png"
        },
        { 
            title: "Hydrogen", 
            text: "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass.[7][note 1] Non-remnant stars are mainly composed of hydrogen in its plasma state. The most common isotope of hydrogen, termed protium (name rarely used, symbol 1H), has a single proton and zero neutrons.",
            url: "http://en.wikipedia.org/wiki/Hydrogen",
            image: "http://upload.wikimedia.org/wikipedia/commons/4/4d/Hydrogen_atom.svg"
        },
        { 
            title: "Carbon", 
            text: 'Carbon (from Latin: carbo "coal") is the chemical element with symbol C and atomic number 6. As a member of group 14 on the periodic table, it is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds. There are three naturally occurring isotopes, with 12C and 13C being stable, while 14C is radioactive, decaying with a half-life of about 5,730 years.[11] Carbon is one of the few elements known since antiquity.',
            url: "http://en.wikipedia.org/wiki/Carbon",
            image: "http://upload.wikimedia.org/wikipedia/commons/4/4b/Diamond-and-graphite-with-scale.jpg"
        }
    ]
}

var deck = simplecards.load(model);

