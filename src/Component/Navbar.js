import React from 'react'

const Navbar = ({ filterItem, btnData }) => {
    return (
        <div>
            <nav>
                <div className='logo'>FRUITS<span>SHOP</span></div>
                <div>
                    {btnData.map((current, index) => (
                        <div className='btn-div' key={index}>
                            <button onClick={() => filterItem(current)}>
                                {current}
                            </button>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
