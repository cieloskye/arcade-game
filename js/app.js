// app.js

// Enemies our player must avoid
class Enemy {
    contructor (sprite, x, y, speed) { 
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed; 
        this.step = 101;
        this.edge = this.step * 4; 
    };

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        //ctx.drawImage(this.sprite, this.x, this.y);
    };
 
    
    update(dt) { 
        // Parameter: dt, a time delta between ticks 
        //  - multiply any movement by the dt parameter
        //if(this.x < this.edge) {
        //    this.x += 150 * dt;
        //} else {
        //    this.x = -101;
        //};
    };
    
    handleInput() { 
        //if (this.x > 0) {
            //this.x += this.step;
        //}

    };
  
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
        for(let enemy of allEnemies) {
            console.log(enemy);
        if(this.y === enemy.y) {
            alert('collision!');

        }}

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



//const enemy1 = new Enemy('images/char-princess-girl.png', 0, 0, 150);
const enemy2 = new Enemy(-101, 55, 400);
const enemy3 = new Enemy(-150 * 3, 138, 300);
const enemy4 = new Enemy(-101 * 2, 221, 350);
const enemy5 = new Enemy(-120, 304, 200);
const enemy6 = new Enemy(-101, 387, 150);


const allEnemies = [];

allEnemies.push(
    //enemy1,
    enemy2,
    enemy3,
    enemy4,
    enemy5,
    enemy6
    );

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
