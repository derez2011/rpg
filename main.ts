scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(6, 4), sprites.dungeon.greenSwitchDown)
    amongus = sprites.create(img`
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . f f f . . . . 
        . . f f 2 2 2 f . . . 
        . . f 2 2 2 9 1 1 . . 
        . . f 2 2 2 9 9 9 . . 
        . . f 2 2 2 2 f . . . 
        . . f f 2 2 2 f . . . 
        . . . f 2 f 2 f . . . 
        . . . f 2 f 2 f . . . 
        . . . f f f f f . . . 
        `, SpriteKind.Food)
    amongus.x = 28
    amongus.y = 250
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . 
        . . . . f f f . . . . 
        . . . f 1 1 1 f . . . 
        . . f 1 1 1 9 1 9 . . 
        . . f 1 1 1 9 9 9 . . 
        . . f 1 1 1 1 f . . . 
        . . f 1 1 1 1 f . . . 
        . . . f 1 f 1 f . . . 
        . . . f 1 f 1 f . . . 
        . . . f 1 f 1 f . . . 
        . . . f f f f f . . . 
        `],
    500,
    false
    )
})
let amongus: Sprite = null
let mySprite: Sprite = null
game.showLongText("Escape...", DialogLayout.Full)
if (controller.A.isPressed()) {
    scene.setBackgroundColor(15)
    tiles.setCurrentTilemap(tilemap`level1`)
    mySprite = sprites.create(img`
        . . f f f f f f f . . 
        . . f 1 1 1 1 1 f . . 
        . . f 1 9 9 9 1 f . . 
        . . f 1 9 f 9 1 f . . 
        . . f 1 9 9 9 1 f . . 
        . . f 1 1 1 1 1 f . . 
        . . f f f f f f f . . 
        . . . f f f f f . . . 
        . f . f f f f f . f . 
        . f . f f f f f . f . 
        . . . . f . f . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 50, 50)
    scene.cameraFollowSprite(mySprite)
    mySprite.x = 90
    mySprite.y = 120
}
