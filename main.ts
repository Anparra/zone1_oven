namespace SpriteKind {
    export const oven = SpriteKind.create()
}
function placeOven () {
    oven1 = sprites.create(img`
        . . c c c c c c c c c c c c c c
        . . c b d d d d d d d d d d d d
        c c c b d d d d d d d d d d d d
        c b b b d d d d d d d d d d d d
        c d d d d d d d d d d d d d d d
        c d d d d d d d d d d d d d d d
        c d d d d d d d d d d d d d d d
        c d d d d d d d d d d d d d d d
        c d d d d d d d d d d d d d d d
        c d d d d d d d d d d d d d d d
        c d d d d d d d d d d d d d d d
        c d d d d d d d d d d d d d d d
        c b d d d d d d d d d d d d d d
        c c b b b b b b b b b b b b b b
        c c f f f f f f f f f f f f f f
        c c f f f f f f f f f f f f f f
    `, SpriteKind.oven)
    tiles.placeOnTile(oven1, tiles.getTileLocation(16, 0))
    oven2 = sprites.create(img`
        c c c c c c c c c c c c c c . .
        d d d d d d d d d d d d b c . .
        d d d d d d d d d d d d b c c c
        d d d d d d d d d d d d b b b c
        d d d d d d d d d d d d d d d c
        d d d d d d d d d d d d d d d c
        d d d d d d d d d d d d d d d c
        d d d d d d d d d d d d d d d c
        d d d d d d d d d d d d d d d c
        d d d d d d d d d d d d d d d c
        d d d d d d d d d d d d d d d c
        d d d d d d d d d d d d d d d c
        d d d d d d d d d d d d d d b c
        b b b b b b b b b b b b b b c c
        f f f f f f f f f f f f f f c c
        f f f f f f f f f f f f f f c c
    `, SpriteKind.oven)
    tiles.placeOnTile(oven2, tiles.getTileLocation(17, 0))
    oven3 = sprites.create(img`
        c b f f d d b b f f d d b b f f
        c b f f d d b b f f d d b b f f
        f b f f b b b b f f b b b b f f
        f b f f b b b b f f b b b b f f
        f b f f f f f f f f f f f f f f
        f b f f f f f f f f f f f f f f
        f d d d d d d d d d d d d d d d
        f d f f f f f f f f f f f f f f
        f d f f f f f f f f f f f f f f
        f d f f f f f f f f f f f f f f
        f d f f f f f f f f f f f f f f
        f d f f f f f f f f f f f f f f
        f d f f f f f f f f f f f f f f
        f d c c b b b b d d d d d d d d
        f d f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.oven)
    tiles.placeOnTile(oven3, tiles.getTileLocation(16, 1))
    oven4 = sprites.create(img`
        f f d d b b f f d d b b f f b c
        f f d d b b f f d d b b f f b c
        f f b b b b f f b b b b f f b f
        f f b b b b f f b b b b f f b f
        f f f f f f f f f f f f f f b f
        f f f f f f f f f f f f f f b f
        d d d d d d d d d d d d d d d f
        f f f f f f f f f f f f f f d f
        f f f f f f f f f f f f f f d f
        f f f f f f f f f f f f f f d f
        f f f f f f f f f f f f f f d f
        f f f f f f f f f f f f f f d f
        f f f f f f f f f f f f f f d f
        d d d d d d d d b b b b c c d f
        f f f f f f f f f f f f f f d f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.oven)
    tiles.placeOnTile(oven4, tiles.getTileLocation(17, 1))
}
let oven4: Sprite = null
let oven3: Sprite = null
let oven2: Sprite = null
let oven1: Sprite = null
namespace oven {
    //% block
    export function Zone2_oven() {
        placeOven()
    }
}
