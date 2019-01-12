// Player, our hero
let Player = class {
    function(x, y, sprite) { 
        this.x = x;
        this.y = y;
        this.sprite = 'char-horn-girl.png'; 
    }
    // Update the players's position
    update (dt) { 
        //check collision here
            // player position ==== ememy position?
        // game over?
            //player position === final tile?

    }
    render () { 
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    } 
    handleInput () { 
        //update x & y according to input

    }
}


// Enemies our player must avoid
let Enemy = class {
    contructor (x, y, sprite) { 
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png'; 
    }
    // Update the enemy's position
    update (dt) { 
        /* Parameter: dt, a time delta between ticks - multiply any movement by the dt parameter
        If enemy position != boundry
            increment x by speed * dt
        else
            reset enemy to start position
        */
    }
    // Draws enemy on the screen
    render () { 
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    } 
    //Handles user input to move player
    handleInput () { 

    }
}



// Instantiate objects.


let allEnemies = [];



let player =
// Place the player object in a variable called player




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
