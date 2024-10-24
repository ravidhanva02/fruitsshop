import React, { useState} from 'react'
import './Fruits.css'
import Menu from './Menuapi'
import Menucard from './Menucard'
import Navbar from './Navbar'


const unique = [...new Set(
    Menu.map((current)=>{
        return current.categroy;
        
    })
    
), "All" ,
]

const Fruits = () => {
    const [menuData , setmenuData] = useState(Menu)
    const [btnData, setBtnData] = useState(unique);
  
    
          
    const filterItem = (categroy) =>{
        if (categroy === "All") {
            setmenuData(Menu);
            return;
          } 

        const updateList = Menu.filter((current) => { 
            return current.categroy === categroy;
        }) 
        setmenuData(updateList);
    };
    
    
    return (
        <div>
            <Navbar filterItem={filterItem} btnData={btnData} />
            <Menucard menuData={menuData} />
        </div>
    )
}

export default Fruits