import React from 'react'

const Navbar = ({ categorySelector, itemList }) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                        itemList.map((currentValue) => {
                            return <button className='btn-group__item' onClick={() => categorySelector(currentValue)}>{currentValue}</button>
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
