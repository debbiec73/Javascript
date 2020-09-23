
   
    // Create Dino Constructor
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
    // Create Dino Objects
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
console.log(dinosaurs); 

    // Create Human Object - species, weight, height, diet, where, when, fact
function human(name, feet, inches, weight, diet, image) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
    this.image = image;
}
    // Use IIFE to get human data from form
    // const myUser ={};
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
        console.log(myName);
        console.log(myUser);
    
        // Generate Tiles for each Dino in Array
    console.log(dinosaurs);
  const newArray = dinosaurs.map(function(item) {
  if (item.species === 'Pigeon') { 
      return item;}
  else {
        let count = Math.floor(Math.random() * 6);
        console.log(count);
        //let count = 3
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
console.log(newArray);
const result = [];
for (let i = 0; i < 4; i++) {
  result.push(newArray[i]);
}
result.push(myUser);
for (let i = 4; i < 8; i++) {
  result.push(newArray[i]);
}

const result2 = newArray.slice(0,4).concat([myUser]).concat(newArray.slice(4,8))
console.log(result);
console.log(result2);
var grid = document.getElementById('grid');
var div = document.createElement("div");
var name = document.createElement("h3");
var image = document.createElement('img');
var fact = document.createElement("p");

const tiles = result.map(function(item) {
    name = item.species;
    fact = item.fact;
    
        
        switch(name) {
            case 'Anklyosaurus': item.image = "anklyosaurus.png";
            return item;
            case 'Brachiosaurus': item.image = "brachiosaurus.png";
            return item;
            case 'Elasmosaurus': item.image = "elasmosaurus.png";
            return item;
            case 'Pigeon': item.image = "pigeon.png";
            return item;
            case 'Pteranodon': item.image = "pteranodon.png";
            return item;
            case 'Stegosaurus': item.image = "stegosaurus.png";
            return item;
            case 'Triceratops': item.image = "triceratops.png";
            return item;
            case 'Tyrannosaurus Rex': item.image = "tyrannosaurus rex.png";
            return item;
            default: item.image = "human.png"
            return item;
        }
        console.log(name);
        console.log(image);
    }
    
//name.classList.add('grid-item_h3');
//image.classList.add('grid-item_img');
//fact.classList.add('grid-item_p');

//div.appendChild(name, image, fact);
        //grid.appendChild(div);



       //className = "grid-item"
       //className = "grid-item img"
       //className = "grid-item h3"
       //className = "grid-item p"
       //speciesName.append();
    
);
console.log(tiles);
    }));
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
