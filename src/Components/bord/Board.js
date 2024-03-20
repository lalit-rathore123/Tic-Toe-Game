import React from 'react'
import "./Board.css"
import Box from '../box/Box'

function Board({ board,onClick}) {
    return (
        <div className='board'>

            {board.map((item, idx) => (
                <Box key={idx} Value={item} onClick={()=> item === null && onClick(idx)} />
            ))}

        </div>
    )
}

export default Board
