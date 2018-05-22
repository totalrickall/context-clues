var friends = ['Trent', 'Josh', 'Ben', 'Will', 'Rucker'];
//console.log(friends.length);
var locations = ['Crestline', 'Avondale', 'Downtown', 'Oxford', 'Panama', 'Cashiers', 'Highlands', 'Tuscaloosa', 'Jacksonville', 'Auburn'];
//console.log(locations.length);
var weapons = ['glock', 'golf club', 'AK-47', 'tennis racket', 'lamp', 'toilet seat', 'bowie knife', 'machete', 'piano wire', 'scissors', 'rake', 'pitch fork', 'spoon', 'computer monitor', 'tea cup', 'paper clip', 'deer antlers', 'banana peel', 'words', 'axe'];
//console.log(weapons.length);

document.addEventListener('DOMContentLoaded', () => {
    for (i = 1; i < 101; i++) {
        console.log(i);

        var h3 = document.createElement('h3');
        var h3Text = document.createTextNode(`Accusation ${i}`);
        h3.appendChild(h3Text);
        document.body.appendChild(h3);
    };
});