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
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.step = 101;
        this.jump = 83;
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



    
    handleInput(input) {
        switch(input) {
            case 'up':
                this.y -= this.jump;
                break;
            case 'down':
                this.y += this.jump;
                break;
            case 'left':
                this.x -= this.step;
                break;
            case 'right':
                this.x += this.step;
        }
        
        player.update();

    }

    reset() {

    }
};

// Instantiate objects.
const player = new Player('images/char-horn-girl.png', 200, 450);

const allEnemies = [];

// Listens for key presses and sends to Player.handleInput() method. 
document.addEventListener('keyup', function(e) { 
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
