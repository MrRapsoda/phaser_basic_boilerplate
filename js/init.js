//Here we set the main game configuration
//Instantiate game (new Phaser.Game(config)) 
//and set init methods
//Preload | Create | Update | Render

//Global game configuration
var config = {
    type: Phaser.AUTO,
    width: 1136,
    height: 640,
    scene: {
        preload: preload,
        create: create,
        update: update,
        render: render
    },
    physics: {
        default: 'arcade'
    }
}

/**
 * Run the Game
 * Call from index.html
 */
const run = () => {
    createGame(config);
}

const preload = () => {
    //@TODO
}

const create = () => {
    //@TODO
}

const update = () => {
    //@TODO
}

const render = () => {
    //@TODO  
}