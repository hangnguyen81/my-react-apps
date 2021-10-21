import MenuHeader from "./components/MenuHeader";
import MenuFooter from "./components/MenuFooter";
import Category from "./components/Category";
import Menu from "./components/Menu";
import menu from "./menuData";
import {useState, useEffect} from 'react';

function App(){
    const [menuItems, setMenuItems] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        setMenuItems(menu);
        const allCategories = ['all',...new Set(menu.map(item => item.category))].sort();
        setCategories(allCategories);
    },[])

    function filter(category){
        let newMenuItems
        if (category==='all')
            newMenuItems = menu;
        else
            newMenuItems = menu.filter(item => item.category === category);
        setMenuItems(newMenuItems);
    }

    return(
        <div className="container">
            <MenuHeader/>
            <Category cat={categories} filterItem={filter}/>
            <Menu data={menuItems}/>
            <MenuFooter/>
        </div>
    )
}

export default App