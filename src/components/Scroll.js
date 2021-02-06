import React from 'react'

const Scroll = (props) => {
    const scrollStyles = {
        overflowY: 'scroll',
        border: '1px solid black',
        height: '900px'
    }
    return (
        <div style={scrollStyles}>
            {props.children}
        </div>
    )
}

export default Scroll