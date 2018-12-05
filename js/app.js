// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here

    this.sprite = 'images/enemy-bug.png';
};

// Updates the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

};

// Draws the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Player Class
var Player = function(){

    this.sprite = 'images/char-boy.png';

  }


Player.prototype.render = function(){

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

  };

Player.prototype.update = function(dt) {

};

//Player.prototype.handleInput = function(){

  //}



//Listens for key presses and sends the keys to the Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



// Objects


const player = new Player();
const allEnemies = [];
