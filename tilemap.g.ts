// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020102020202020202020202020202020201020203010101020202020202020202010202010101010102020202020101010101020101010102020202020201010101010202020102020202020202030101010102020201020202020202020202020102020202010202020202020202020201020202020102020202020202020202010202020201020202020202030101010102020202010101010102020101010101010101010102020202020201010101020202020202020202020202010101020202020202020202020202020101010202020202020202020202020203010102020202020202020202020202020202020202020202020202020202`, img`
2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . 2 2 . . . . 2 2 2 2 
2 2 2 2 2 . 2 2 . . . . . 2 2 2 
2 2 . . . . . 2 . . . . 2 2 2 2 
2 2 . . . . . 2 2 2 . 2 2 2 2 2 
2 2 . . . . . 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 . . . . . 2 2 2 2 . . . . . 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,myTiles.tile2,myTiles.tile1,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
