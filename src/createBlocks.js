import blueBlock from './images/blue_block.png'
import redBlock from './images/red-block.png'
import yellowBlock from './images/yellow_block.png'
import orangeBlock from './images/orange_block.png'
import greenBlock from './images/green_block.png'
import purpleBlock from './images/purple-block.png'
import lightBlueBlock from './images/light_blue_block.png'

const offset =4
const figures = [
  [1,3,5,7], // I
  [0,2,3,5], // Z
  [1,3,2,4], // S
  [1,3,2,5], // T
  [0,1,3,5], // L
  [1,3,5,4], // J
  [0,1,2,3], // O
];

const bricks = [
  blueBlock,
  redBlock,
  yellowBlock,
  orangeBlock,
  greenBlock,
  purpleBlock,
  lightBlueBlock
];

export const createBlocks = () =>{
  const blocks = []
  const randamFigureId = Math.floor(Math.random() * 7);
  for (let i = 0; i < 4; i++) {
    const block = {
      id : i+1,
      image: bricks[randamFigureId],
      positionX: figures[randamFigureId][i] % 2 + offset,
      positionY: Math.floor(figures[randamFigureId][i] / 2),
      width : 1,
      height :1
    }
    blocks.push(block)
    }

return blocks
}
