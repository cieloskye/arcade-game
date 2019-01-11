// Enemies our player must avoid
let Enemy = class {
    function(x, y, sprite) { 
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png'; 
};


}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) { //Udacity Provided
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() { //Udacity Provided
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); //Udacity Provided
}; 

Enemy.prototype.handleInput = function() { //Udacity Provided
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

let Player = class {
    function(x, y, sprite) { 
    this.x = x;
    this.y = y;
    this.sprite = 'char-horn-girl.png'; 

}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) { //Udacity Provided
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
