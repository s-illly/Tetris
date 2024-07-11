const tetris_height = 20
const tetris_width = 10
export const rotateBlocks = (blocks,fields) =>
{
    let x = blocks[1].positionX
    let y = blocks[1].positionY
    let canRotate = true
    blocks.forEach(function(block) {
        let newx = block.positionY - y;
        let newy = block.positionX - x;
        newx = x - newx
        newy = y + newy
        if(newx < 0 || newx >= tetris_width || newy>= tetris_height)
            canRotate = false
        fields.forEach(function(field){
            if( newx === field.positionX && newy === field.positionY) 
            canRotate = false
        })
    })
    if(canRotate)
    {
        blocks.forEach(function(block) {
            let newx = block.positionY - y;
            let newy = block.positionX - x;
            block.positionX = x - newx
            block.positionY = y + newy
        })
    }
}