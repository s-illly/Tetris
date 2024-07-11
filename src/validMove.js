const tetris_height = 20
const tetris_width = 10
export const validateMove = (blocks,fields, dx, dy) =>
{
    let canMove = true
    blocks.forEach(function(block) {
        let x = block.positionX + dx
        let y = block.positionY + dy
        if( y >= tetris_height  || 
            x >= tetris_width   || 
            x < 0)
            canMove = false 
            
            fields.forEach(function(field){
                if( x === field.positionX && y === field.positionY) 
                    canMove = false
            })     
    })
    return canMove
}