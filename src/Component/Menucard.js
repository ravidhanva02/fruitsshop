import React from 'react'

const Menucard = ({ menuData }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {menuData.map((current) => {
                return (
                    <div className='container' key={current.id}>
                        <div className='card'>
                            <div className='firstsecond'>
                                <div className='first'>
                                    <div className='id'>{current.id}</div>
                                    <div className='name'>{current.name}</div>
                                    <div className='cate'>{current.categroy}</div>
                                </div>
                                <div className='second'>
                                    <img src={current.img} alt='image' className='menu-img' />
                                </div>
                            </div>
                            <div className='description'>{current.disc}</div>
                            <div className='hori-line'>
                                <hr />
                                <span>R E A D</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Menucard;
