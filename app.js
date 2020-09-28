
   
    
class dino {
    constructor(species, weight, height, diet, where, when, fact, image) {
        this.species = species,
            this.weight = weight,
            this.height = height,
            this.diet = diet,
            this.where = where,
            this.when = when,
            this.fact = fact;
            this.image = image;
    }
    heightCompare() {
        if (this.height > myUser.inches) {
            const compare = this.height - myUser.inches;
            return (`${this.species} is ${compare} times taller than you`)
        } else {
            return (this.species + ' is ' + this.height + ' inches tall')
        }
        
    }
    weightCompare() {
        if (this.weight > myUser.weight) {
            const compare = this.weight/myUser.weight;
            return (this.species + ' is ' + compare + ' times heavier than you')
        } else {
            return (this.species + ' weighs ' + this.weight + ' lbs')
        }
    }
    dietCompare() {
        if(this.diet === myUser.diet) {
            return (this.species + ' is a ' + this.diet + ' like you')
        } else {
            return (this.species + ' is a ' + this.diet)
        }
    }
};
   
    const dinos = [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "Tyrannosaurus Rex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]

const dinosaurs = dinos.map(function(item) {
    item = new dino(item.species, item.weight, item.height, item.diet, item.where, item.when, item.fact, item.image);
    return item;
});

function human(name, feet, inches, weight, diet, image) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
    this.image = image;
}

    const button = document.getElementById('btn');
    button.addEventListener('click', (function() {
        const form = document.getElementById('dino-compare');
        form.setAttribute('hidden', '');
        const myName = document.getElementById('name').value;
        const myFeet = document.getElementById('feet').value;
        const myInches = parseInt(document.getElementById('inches').value) + myFeet*12;
        const myWeight = document.getElementById('weight').value;
        const myDiet = document.getElementById('diet').value;
        const myImage = " ";
        myUser = new human(myName, myFeet, myInches, myWeight, myDiet, myImage);
       
     
  const newArray = dinosaurs.map(function(item) {
  if (item.species === 'Pigeon') { 
      return item;}
  else {
        let count = Math.floor(Math.random() * 6);
        switch(count) {
        case 0: item.fact = item.weightCompare();
        return item;
        case 1: item.fact = item.heightCompare();
        return item;
        case 2: item.fact = item.dietCompare();
        return item;
        case 3: item.fact = item.where;
        return item;
        case 4: item.fact = item.when;
        return item;
        case 5: item.fact = item.fact;
return item;
  }};
  
});
const result = [];
for (let i = 0; i < 4; i++) {
  result.push(newArray[i]);
}
result.push(myUser);
for (let i = 4; i < 8; i++) {
  result.push(newArray[i]);
}

function createDisplayName(name) {
    const displayName = document.createElement("h3");
    const displayNameText = document.createTextNode(name);
    displayName.className += "h3";
    displayName.appendChild(displayNameText);
    return displayName;
}

function createDisplayImage(image) {
    var displayImage = document.createElement("img");
    displayImage.src = image;
    displayImage.className += "img";
    return displayImage;
}

function createDisplayFact(fact) {
    const displayFact = document.createElement("p");
    const displayFactText = document.createTextNode(fact);
    displayFact.className += "p";
    displayFact.appendChild(displayFactText);
    return displayFact;
}

function createGridItem(displayName, displayImage, displayFact) {
    var gridItem = document.createElement('div');
    gridItem.appendChild(displayName);
    gridItem.appendChild(displayImage);
    gridItem.appendChild(displayFact);
    gridItem.className += 'grid-item';
    grid.appendChild(gridItem);
    return gridItem;
}

function createHumanGridItem(displayName, displayImage) {
    var gridItem = document.createElement('div');
    gridItem.appendChild(displayName);
    gridItem.appendChild(displayImage);
    gridItem.className += 'grid-item';
    grid.appendChild(gridItem);
    return gridItem;
}

const tiles = result.map(function(item) {
    
    var grid = document.getElementById('grid');
        name = item.species
        image = item.image
        fact = item.fact
       
        switch(name) {
            
            case 'Anklyosaurus': image = 'images/anklyosaurus.png'
               
            displayName = createDisplayName(name);
            displayImage = createDisplayImage(image);
            displayFact = createDisplayFact(fact);
            gridItem = createGridItem(displayName, displayImage, displayFact);
            return item;

            case 'Brachiosaurus': image = 'images/brachiosaurus.png';
            displayName = createDisplayName(name);
            displayImage = createDisplayImage(image);
            displayFact = createDisplayFact(fact);
            gridItem = createGridItem(displayName, displayImage, displayFact);
            return item;

            case 'Elasmosaurus': image = 'images/elasmosaurus.png';
            displayName = createDisplayName(name);
            displayImage = createDisplayImage(image);
            displayFact = createDisplayFact(fact);
            gridItem = createGridItem(displayName, displayImage, displayFact);
            return item;

            case 'Pigeon': image = 'images/pigeon.png';
            displayName = createDisplayName(name);
            displayImage = createDisplayImage(image);
            displayFact = createDisplayFact(fact);
            gridItem = createGridItem(displayName, displayImage, displayFact);
            return item;

            case 'Pteranodon': image = 'images/pteranodon.png';
            displayName = createDisplayName(name);
            displayImage = createDisplayImage(image);
            displayFact = createDisplayFact(fact);
            gridItem = createGridItem(displayName, displayImage, displayFact);
            return item;

            case 'Stegosaurus': image = 'images/stegosaurus.png';
            displayName = createDisplayName(name);
            displayImage = createDisplayImage(image);
            displayFact = createDisplayFact(fact);
            gridItem = createGridItem(displayName, displayImage, displayFact);
            return item;

            case 'Triceratops': image = 'images/triceratops.png';
            displayName = createDisplayName(name);
            displayImage = createDisplayImage(image);
            displayFact = createDisplayFact(fact);
            gridItem = createGridItem(displayName, displayImage, displayFact);
            return item;

            case 'Tyrannosaurus Rex': image = 'images/tyrannosaurus rex.png';
            displayName = createDisplayName(name);
            displayImage = createDisplayImage(image);
            displayFact = createDisplayFact(fact);
            gridItem = createGridItem(displayName, displayImage, displayFact);
            return item;

            default: image = 'images/human.png';
            displayName = createDisplayName(item.name);
            displayImage = createDisplayImage(image);
            gridItem = createHumanGridItem(displayName, displayImage);
            return item;
        }
    
    })
    }));
  