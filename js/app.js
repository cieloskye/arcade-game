// app.js

// Enemies our player must avoid
class Enemy {
    contructor (sprite, x, y) { 
        this.sprite = sprite;
        this.x = x;
        this.y = y; 
        this.step = 101; 
    };

    render() {   
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    };
    
    //update(dt) { 
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
    //};
    
    //handleInput() { 

    //};
  
}

//Player object, which user controls during game play
class Player {
    constructor (sprite, x, y) { 
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.step = 101;
        this.jump = 83;
    }; 
    //Creates Player object on canvas.
    render() {   
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    };
      
    update(dt) { 
 
        //check collision here
            // player position ==== enemy position?
        // game over?
            //player position === final tile?
    };



    //Allows user to operate player object with arrow keys 
    //by calling on the event listener below.
    handleInput(input) {
        switch(input) {
            case 'up':
                if (this.y > 0) {
                    this.y -= this.jump;
                }
                break;
            case 'down':
                if (this.y < this.jump * 4) {
                    this.y += this.jump;
                }
                break;
            case 'left':
                if (this.x > 0) {
                    this.x -= this.step;
                }
                break;
            case 'right':
                if (this.x < this.step * 3) {
                    this.x += this.step;
                }
        }
        
        player.update();

    }

    reset() {

    }
};

// Instantiate objects.
const player = new Player('images/char-horn-girl.png', 200, 440);

const allEnemies = [];

const queen = new Enemy('images/char-princess-girl.png', 0, 0);

const enemy01 = new Enemy('images/enemy-bug.png', 0, 0);

//const enemy02 = new Enemy();
//const enemy03 = new Enemy();
//const enemy04 = new Enemy();
//const enemy05 = new Enemy();
//const enemy06 = new Enemy();
//const enemy07 = new Enemy();
//const enemy08 = new Enemy();
//const enemy09 = new Enemy();
//const enemy10 = new Enemy();
//const enemy11 = new Enemy();
//const enemy12 = new Enemy();

allEnemies.push(queen);

               //'enemy01', 
               //'enemy02', 
               //'enemy03',  
               //'enemy04',  
               //'enemy05', 
               //'enemy06', 
               //'enemy07', 
               //'enemy08', 
               //'enemy09', 
               //'enemy10', 
               //'enemy11', 
               //'enemy12'
               //);


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
