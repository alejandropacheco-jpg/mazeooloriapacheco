scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.over(false)
})
let mySprite = sprites.create(img`
    . . . . . . e e e e . . . . . . 
    . . . . . e e d e e e e . . . . 
    . . . . e e d d d d d e e . . . 
    . . . . e d e d d e e d e . . . 
    . . . . e d d d d d d e e . . . 
    . . . . e e d e d d d e . . . . 
    . . . . e e e d d d e e e . . . 
    . . . . . d 2 d b d 2 e e . . . 
    . . . . . d 2 d 2 d 2 e e . . . 
    . . . . d d 2 2 2 2 2 d d . . . 
    . . . . d d 2 2 d 2 2 d d . . . 
    . . . . d . d d d d d . d . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . d d 2 d 2 . . . . . 
    . . . . . . d d . d d . . . . . 
    . . . . . d d . . . d d . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
info.startCountdown(10)
