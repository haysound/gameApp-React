import React, {useState} from 'react';
import './SideMenu.css';
import navListData from "../../data/navListData.js";
import NavListItem from "../NavListItem.jsx";
import socialListData from "../../data/socialListData.js";
import SocialListItem from "../SocialListItem.jsx";

function SideMenu({active}) {
    const [navData, setNavData] = useState(navListData);
    const [socialData, setSocialData] = useState(socialListData);
    return (
        <div className={`sideMenu ${active ? 'active' : undefined}`}>
            <a href="#" className="logo">
                <i className="bi bi-controller"></i>
                <span className="brand">Play</span>
            </a>
            <ul className="nav">
                {
                    navData.map(item=>(
                        <NavListItem key={item._id} item={item}/>
                    ))
                }
            </ul>
            <ul className="social">
                {
                    socialData.map(item=>(
                        <SocialListItem key={item._id} item={item}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default SideMenu;