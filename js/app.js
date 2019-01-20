// app.js

// Enemies our player must avoid
class Enemy {
    contructor (sprite, x, y) { 
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;  
    }

    render() { 
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }
    
    update(dt) { 
        /* Parameter: dt, a time delta between ticks - multiply any movement by the dt parameter
        If enemy position != boundary
            increment x by speed * dt
        else 
            reset enemy to start position
        /* if (enemy hasn't passed final tile) {
            increment ++
        } else {
        reset to starting position
        }
        */
    }
    
    handleInput() { 

    }
  
}

class Player {
    constructor (sprite, x, y) { 
        this.sprite = 'images/char-horn-girl.png';
        this.x = 0;
        this.y = 0;
    }  
  
    render() {   
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    };
      
    update(dt) { 
        //check collision here
            // player position ==== enemy position?
        // game over?
            //player position === final tile?
    }
    
    handleInput() { 
        //update x & y according to input

    }
    reset() {

    }
};

// Instantiate objects.
const player = new Player();

const allEnemies = [];

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
