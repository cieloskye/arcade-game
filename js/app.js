// app.js

// Enemies our player must avoid
class Enemy {
    constructor (x, y, speed) { 
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed; 
        this.move = 101;
        this.edge = this.move * 5; 
    };

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        //ctx.drawImage(this.sprite, this.x, this.y);
    };
 
    //moves enemy sprite across and off the screen right 
    // then resets spirte off screen left to run again
    update(dt) { 
    	if(this.x < this.edge) {
        	this.x += 330 * dt;
        } else {
        	this.x = -120;
        }
    };
    
    handleInput() { 
        //if (this.x > 0) {
            //this.x += this.move;
        //}

    };
  
}

/*
//Enemy Queen Who Guards the final tile (water)
class Queen {
    constructor (sprite, x, y) { 
        this.sprite = 'images/char-princess-girl.png';
        this.x = x;
        this.y = y; 
        this.move = 101; 
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
        this.move = 101;
        this.jump = 83;
    }; 
    //Creates Player object on canvas.
    render() {   
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    };
      
    update(dt) { 
        for(let enemy of allEnemies) {

        if(this.y === enemy.y) {
            alert('collision!');

        }}
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
                    this.x -= this.move;
                }
                break;
            case 'right':
                if (this.x < this.move * 3) {
                    this.x += this.move;
                }
        }
        
        player.update();

    }

    reset() {

    }
};

// Instantiate objects.
const player = new Player('images/char-horn-girl.png', 200, 445);


const enemy1 = new Enemy(-250, 60, 500);
const enemy2 = new Enemy(-500, 60, 400);
const enemy3 = new Enemy(-100, 145, 700);
const enemy4 = new Enemy(-500, 140, 300);
const enemy5 = new Enemy(-700, 225, 400);
const enemy6 = new Enemy(-150, 303, 150);
const enemy7 = new Enemy(-350, 390, 100);
//const queen = new Queen(0, 50, 200);

const allEnemies = [];


console.log(enemy1.y);

allEnemies.push(
    enemy1,
    enemy2,
    enemy3,
    enemy4,
    enemy5,
    enemy6,
    enemy7
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
