// Character Class
class Character {
    constructor(name, health, attack, accuracy) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.accuracy = accuracy;
    }

    attackEnemy(enemy) {
        // Generate a random number to check accuracy
        const chance = Math.random();

        if (chance < this.accuracy) {
            enemy.health -= this.attack;
            console.log(this.name + " hits " + enemy.name + " and deals " + this.attack + " damage!");
        } else {
            console.log(this.name + " misses the attack!");
        }
    }

    isAlive() {
        return this.health > 0;
    }
}

// Create two characters
const character1 = new Character('Lebron', 100, 5, 0.5);
const character2 = new Character('Curry', 100, 12, 0.8);

// Simulate the battle
console.log('The battle between Lebron and Curry begins!');
while (character1.isAlive() && character2.isAlive()) {
    character1.attackEnemy(character2);

    if (!character2.isAlive()) {
        console.log(character2.name + " has been defeated!");
        break;
    }

    character2.attackEnemy(character1);

    if (!character1.isAlive()) {
        console.log(character1.name + " has been defeated!");
        break;
    }

    console.log("Status: " + character1.name + " (" + character1.health + " HP), " + character2.name + " (" + character2.health + " HP)");
}

// Announce the winner
if (character1.isAlive()) {
    console.log(character1.name + " wins the battle!");
} else {
    console.log(character2.name + " wins the battle! The announcer declares him the all-time MVP for the GSW!");
}
