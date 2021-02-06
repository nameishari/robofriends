import React from 'react'

const SearchBox = ({onSearchChange}) => {
    return (
        <div className="pa2">
            <input
                className='pa3 ba b--green bg-lighttest-blue'
                type='search'
                placeholder='Search robots'
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBox