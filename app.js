let friends = ['Trent', 'Josh', 'Ben', 'Will', 'Rucker'];
//console.log(friends.length);
let locations = ['Crestline', 'Avondale', 'Downtown', 'Oxford', 'Panama', 'Cashiers', 'Highlands', 'Tuscaloosa', 'Jacksonville', 'Auburn'];
//console.log(locations.length);
let weapons = ['glock', 'golf club', 'AK-47', 'tennis racket', 'lamp', 'toilet seat', 'bowie knife', 'machete', 'piano wire', 'scissors', 'rake', 'pitch fork', 'spoon', 'computer monitor', 'tea cup', 'paper clip', 'deer antlers', 'banana peel', 'words', 'axe'];
//console.log(weapons.length);
let h3;

document.addEventListener('DOMContentLoaded', () => {
    for (i = 1; i < 101; i++) {
        h3 = document.createElement('h3');
        h3.innerText = `Accusation ${i}`;
        document.body.appendChild(h3);

        let set = {
            i,
            friends: friends[Math.floor(Math.random() * friends.length)],
            locations: locations[Math.floor(Math.random() * locations.length)],
            weapons: weapons[Math.floor(Math.random() * weapons.length)]
        };
        h3.addEventListener('click', accuse.bind(set));
    };
});

function accuse() {
    alert(`Accusation ${this.i}: ${this.friends} did it with his ${this.weapons} in ${this.locations}`);
}