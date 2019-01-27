// app.js
//Special thanks to https://matthewcranford.com/ 
//for helping me get unstuck on this.startX & this.startY.
// Enemies our player must avoid
class Enemy {
    constructor (x, y, speed) { 
        this.sprite = 'images/enemy-bug.png';
        this.startX = x - 24;
        this.startY = y;
        this.x = this.startX;
        this.y = this.startY;
        this.speed = speed; 
        this.moveY = 101;
        this.moveX = 83;
        this.edge = this.moveX * 6; 
    };

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        //ctx.drawImage(this.sprite, this.x, this.y);
    };
 
    //moves enemy sprite across and off the screen right 
    // then resets spirte off screen left to run again
    update(dt) { 
    	if(this.x < this.edge) {
        	this.x += this.speed * dt;
        } else {
        	this.x = -120;
        }
    };
    
    handleInput() { 
        if (this.x > 0) {
            this.x += this.moveX;
        }

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
        this.moveX = 101;
        this.moveY = 83;
        this.startX = (this.moveX * 2);
        this.startY = (this.moveY * 4) + 55;
        this.x = this.startX;
        this.y = this.startY;
    }; 
    //Creates Player object on canvas.
    render() {   
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    };
      
    update(dt) { 
        for(let enemy of allEnemies) {
			if(this.y === enemy.y 
            && enemy.x + enemy.moveX > this.x 
            && enemy.x < this.x + this.moveX) {
				console.log('Oh no!');
                this.reset();
                }
    		}
        //Game Over Coditions
    	if(this.y === -28) {
    		modal.style.display = 'block';
            
            span.onclick = function() {
            modal.style.display = "none";
            this.reset();
            }

            

        };     			
    };
    //Allows user to operate player object with arrow keys 
    //by calling on the event listener below.
    handleInput(input) {
        switch(input) {
            case 'up':
                if (this.y > 0) {
                    this.y -= this.moveY;
                }
                break;
            case 'down':
                if (this.y < this.moveY * 4) {
                    this.y += this.moveY;
                }
                break;
            case 'left':
                if (this.x > 0) {
                    this.x -= this.moveX;
                }
                break;
            case 'right':
                if (this.x < this.moveX * 4) {
                    this.x += this.moveX;
                }
        }
        
        player.update();

    }
    //reset Player
    reset() {
        this.x = this.startX;
        this.y = this.startY;
    }
};

//Win condition
class Modal {
    constructor(overlay) {
        this.overlay = overlay;
        const replayButton = overlay.querySelector('.button-replay')
        replayButton.addEventListener('click', this.replay.bind(this));
        overlay.addEventListener('click', e => {
            if (e.srcElement.id === this.overlay.id) {
                this.replay();
            }
        })
    };
    open(){
        this.overlay.classList.remove('is-hidden');
    }
    replay() {
        this.overlay.classList.add('is-hidden');

    }

}
// Instantiate objects.
const player = new Player('images/char-horn-girl.png', 200, 320);

const enemy1 = new Enemy(-120, 55, 400);
const enemy2 = new Enemy(-500, 55, 402);
const enemy3 = new Enemy(-100, 138, 310);
const enemy4 = new Enemy(-500, 138, 300);
const enemy5 = new Enemy(-300, 221, 400);
const enemy6 = new Enemy(-120, 304, 290);
//const queen = new Queen(0, 50, 200);

const allEnemies = [];

allEnemies.push(
    //enemy1,
    //enemy2,
    //enemy3,
    //enemy4,
    //enemy5,
    enemy6,
    );

/*
let winner = false;
const win = new Modal(document.querySelector('.modal-overlay'));
window.openModal = modal.open.bind(modal);
window.openModal();



if (collisionCount === 3) {
    gameOver();
}
*/
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
