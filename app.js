
   
    // Create Dino Constructor
class dino {
    constructor(species, weight, height, diet, where, when, fact) {
        this.species = species,
            this.weight = weight,
            this.height = height,
            this.diet = diet,
            this.where = where,
            this.when = when,
            this.fact = fact;
    }
    heightCompare() {
        if (this.height > myUser.myInches) {
            const compare = this.height/myUser.myInches;
            return (`${this.species} is ${compare} times taller than you`)
        } else {
            return (this.species + ' is ' + this.height + ' inches tall')
        }
        
    }
    weightCompare() {
        if (this.weight > myUser.myWeight) {
            const compare = this.weight/myUser.myWeight;
            return (this.species + ' is ' + compare + ' times heavier than you')
        } else {
            return (this.species + ' weighs ' + this.weight + ' lbs')
        }
    }
    dietCompare() {
        if(this.diet === myUser.myDiet) {
            return (this.species + ' is a ' + this.diet + ' like you')
        } else {
            return (this.species = 'is a ' + this.diet)
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
    item = new dino(item.species, item.weight, item.height, item.diet, item.where, item.when, item.fact);
    return item;
});
console.log(dinosaurs); 
    // Create Human Object - species, weight, height, diet, where, when, fact
function human(name, feet, inches, weight, diet) {
    this.name = name;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
}
    // Use IIFE to get human data from form
    // const myUser ={};
    const button = document.getElementById('btn');
    button.addEventListener('click', (function() {
        const myName = document.getElementById('name').value;
        const myFeet = document.getElementById('feet').value;
        const myInches = parseInt(document.getElementById('inches').value) + myFeet*12;
        const myWeight = document.getElementById('weight').value;
        const myDiet = document.getElementById('diet').value;
        myUser = new human(myName, myFeet, myInches, myWeight, myDiet);
        console.log(myName);
        console.log(myUser);
    }));
    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
 // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
