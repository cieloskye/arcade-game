// app.js

// Player, our user
class Player {
    construtor (x, y, sprite) { 
        this.x = x;
        this.y = y;
        this.sprite = sprite; 
    }
}    
    
Enemy.prototype.render = function() {   
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }
    
Enemy.prototype.update = function(dt) { 
        //check collision here
            // player position ==== ememy position?
        // game over?
            //player position === final tile?
    }
    
Enemy.prototype.handleInput = function() { 
        //update x & y according to input

    }


// Enemies our player must avoid
class Enemy {
    contructor (x, y, sprite) { 
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }
}

Enemy.prototype.render = function() { 
    
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    
    }
    
Enemy.prototype.update = function(dt) { 
        /* Parameter: dt, a time delta between ticks - multiply any movement by the dt parameter
        If enemy position != boundry
            increment x by speed * dt
        else 
            reset enemy to start position
        */
    }
    
Enemy.prototype.handleInput = function() { 

    }



// Instantiate objects.
const player = new Player(202, 400, 'images/char-horn-girl.png');

const enemy = new Enemy('images/enemy-bug.png');

/*
const enemyPosition = [55, 147, 230];

const allEnemies = enemy.map((y, index) => {
    return new Enemy((-142 * (index + 1)), y);

}); 
*/

// Listens for key presses and sends to Player.handleInput() method. 
// DO NOT TOUCH!
document.addEventListener('keyup', function(e) { 
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
