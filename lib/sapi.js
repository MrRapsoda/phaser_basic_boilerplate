/**
 * Common JS for PhaserJS in interactive activities
 * Using Phaser v3.x
 */

/**
 * Function to create the main game
 */

var Game;

function createGame(config) {
    Game = new Phaser.Game(config);
}

const loadImage = (img) => {
    GI.load.image(img.key, `${ASSETS_BASE_URL}${img.path}`);
}

const loadSpritesheet = (spritesheet) => {
    GI.load.spritesheet(
        spritesheet.key,
        spritesheet.path,
        spritesheet.width,
        spritesheet.height
    );
}

const loadAtlas = (atlas) => {
    GI.load.atlas(
        atlas.key,
        `${ASSETS_BASE_URL}${atlas.path}`,
        `${ASSETS_BASE_URL}${atlas.jsonpath}`,
        Phaser.Loader.TEXTURE_ATLAS_JSON_HASH
    );
}

/**
 * @param {Object} gi Phaser game instance
 * @param {Object} img Object with img info
 */
const setImage = (img) => {
    GI.add.image(img.x, img.y, img.key);
}

/**
 * @param {Object} sprite Object containing the info of the sprite
 * x = position in x 
 * y = position in y
 * key = image key registered in preload function
 * frameName = frame id on the respective .json file of the asset
 */
const setSpriteFromAtlas = (sprite) => {
    let localSprite;

    sprite.frameName ?
        localSprite = GI.physics.add.sprite(sprite.x, sprite.y, sprite.key, sprite.frameName) :
        localSprite = GI.physics.add.sprite(sprite.x, sprite.y, sprite.key);

    return localSprite;
}

const debugSpriteInfo = (sprite) => {
    GI.debug.spriteInfo(sprite, 30, 30);
}

const setSpriteDraggable = (sprite) => {
    sprite.setInteractive();
    GI.input.setDraggable(sprite);

    GI.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
}

const enableKeyboardEvents = () => {
    let common = GI.input.keyboard.addKeys('W, A, S, D');
    let alt = GI.input.keyboard.addKeys({ up: 'up', down: 'down', left: 'left', right: 'right' });
    return { common, alt };
}

/**
 * Set events to keyboard caps
 */
const setActionToKeyboardCap = (key, callback) => {
    let keyCap = GI.input.keyboard.on(`keydown-${key}`, callback);

    return keyCap;
}

/**
 * ***NOT WORKING***
 * Enable physics to sprite
 * @param {Object} sprite Sprite object
 */
const enablePhysics = (sprite) => {
    if (Array.isArray(sprite)) {
        for (let i = 0; i < sprite.length; i++) {
            GI.physics.world.enable(sprite[i]);
        }
    } else {
        GI.physics.enable(sprite);
    }
}

/**
 * Scale provided sprite on x and y axis
 * @param {Object} sprite Sprite object
 * @param {number} x x axis scale
 * @param {number} y y axis scale
 */
const scaleSprite = (sprite, x, y) => {
    sprite.scaleX = x;
    sprite.scaleY = y;
}