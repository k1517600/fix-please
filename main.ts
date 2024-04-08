scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (text_list.length > 0) {
        game.showLongText(text_list.shift(), DialogLayout.Bottom)
        tiles.setTileAt(location, sprites.castle.tileGrass2)
    } else {
        game.showLongText("no more hints for you!!!!! gwahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha", DialogLayout.Bottom)
    }
    answer = game.askForString("riddle attempt ")
})
let answer = ""
let text_list: string[] = []
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . . 6 2 6 . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 4 5 4 5 5 . . . . . 
    . . . . 5 4 9 4 9 4 5 . . . . . 
    . . . . 5 4 4 4 4 4 5 . . . . . 
    . . . . 6 4 4 4 4 4 5 . . . . . 
    . . 1 4 1 1 1 1 1 1 4 1 . . . . 
    . 1 1 4 1 1 6 1 1 1 4 1 1 . . . 
    . 1 1 . 5 1 1 1 1 5 . 1 1 . . . 
    . 1 1 . 5 2 2 2 2 5 . 1 1 . . . 
    . 1 . . 5 2 1 1 2 5 . . 1 . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 0))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
text_list = ["what is yoshi's favorite food?", "\"grows in a tree\"", "is not a citrus product"]
