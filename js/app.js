// app.js

// Enemies our player must avoid
class Enemy {
    contructor (sprite, x, y) { 
        this.sprite = sprite;
        this.x = -(this.step * 2);
        this.y = 55; 
        this.step = 101;
        this.boundary = this.step * 4; 
    };

    render() {   
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    };
    
    update(dt) { 
        // Parameter: dt, a time delta between ticks 
        //  - multiply any movement by the dt parameter
        if(this.x < this.boundary) {
            this.x += 150 * dt;
        } else {
            this.x = -30;
        };
    };
    
    //handleInput() { 
        //if (this.x > 0) {
            //this.x += this.step;
        //}

    //};
  
}
/*
//Enemy Queen Who Guards the final tile (water)
class EnemyQueen {
    constructor (sprite, x, y) { 
        this.sprite = 'images/char-princess-girl.png';
        this.x = x;
        this.y = y; 
        this.step = 101; 
    };

    render() {   
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    };
}

*/

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

const queen = new Enemy('images/char-princess-girl.png', -505, 0);
const enemy01 = new Enemy('images/enemy-bug.png', -101, 55);
const enemy02 = new Enemy('images/enemy-bug.png', -101 * 3, 138);
const enemy03 = new Enemy('images/enemy-bug.png', -101 * 2, 221);
const enemy04 = new Enemy('images/enemy-bug.png', -120, 304);
const enemy05 = new Enemy('images/enemy-bug.png', -101, 387);

const allEnemies = [];

allEnemies.push(queen, enemy01, enemy02, enemy03, enemy04, enemy05);
               

console.log(allEnemies);

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
