const tetris_height = 20
const tetris_width = 10
export const resolveFields = (blocks, fields) =>
{
    const yset = new Set();
    blocks.forEach(function(block) {
        yset.add(block.positionY)
    })
    const rset = new Set();
    yset.forEach (function(y) {
        const xset = new Set();
        fields.forEach(function(field){
            if(field.positionY === y)
                xset.add(field.positionX)
        }) 
        if(xset.size === tetris_width){
            rset.add(y)
        }
    })    
    let count = rset.size
    if(count>0){
        let y = Array.from(rset)[0]
        console.log("resolving line : ", y)
        console.log("resolving line count : ", count)
        const newfields = []
        fields.forEach(function(field){            
            if(field.positionY < y){
                let newfield = field
                newfield.positionY += count
                newfields.push(newfield)
            }
            else if(field.positionY> y + count - 1){
                newfields.push(field)
            }            
        }) 
        return newfields
    }
    return fields
}
