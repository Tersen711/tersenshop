import React from "react";
import '.././styles/Header.css'

const Menu = ({header, items}) => {
    return (
        <div className="menu">
            <div className="menu__content">
                <div className="menu__header">{header}</div>
                <ul>
                    {items.map(item => 
                        <li>
                            <a href={item.href}>{item.value}</a>
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </li>    
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;