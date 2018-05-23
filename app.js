var friends = ['Trent', 'Josh', 'Ben', 'Will', 'Rucker'];
//console.log(friends.length);
var locations = ['Crestline', 'Avondale', 'Downtown', 'Oxford', 'Panama', 'Cashiers', 'Highlands', 'Tuscaloosa', 'Jacksonville', 'Auburn'];
//console.log(locations.length);
var weapons = ['glock', 'golf club', 'AK-47', 'tennis racket', 'lamp', 'toilet seat', 'bowie knife', 'machete', 'piano wire', 'scissors', 'rake', 'pitch fork', 'spoon', 'computer monitor', 'tea cup', 'paper clip', 'deer antlers', 'banana peel', 'words', 'axe'];
//console.log(weapons.length);

document.addEventListener('DOMContentLoaded', () => {
    for (i = 1; i < 101; i++) {
        var h3 = document.createElement('h3');
        h3.innerText = `Accusation ${i}`;
        document.body.appendChild(h3);
        
        // bind the arrays to a set
        var set = {
            num: i,
            friends: friends[Math.floor(Math.random() * friends.length)],
            locations: locations[Math.floor(Math.random() * locations.length)],
            weapons: weapons[Math.floor(Math.random() * weapons.length)]
        };
        //console.log(set);
        h3.addEventListener('click', setter.bind(set));
    };
});

////////////////////
function setter() {
    alert(`Accusation ${this.num}: I accuse ${this.friends}, with the ${this.weapons} in ${this.locations}!`)
}