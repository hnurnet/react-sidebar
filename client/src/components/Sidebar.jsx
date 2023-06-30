import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../App.css';



const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItems = [
        {
            path:"/",
            name:"Dashboard",
            icon:<FaIcons.FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaIcons.FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaIcons.FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaIcons.FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaIcons.FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaIcons.FaThList/>
        }


    ]
    return (
        <div className="container">
            <div className="sidebar" style={{width: isOpen ? "250px" : "50px"}}>
                <div className="top_section">
                    <h1 className="logo" style={{display: isOpen ? "block" : "none"}}>Logo</h1>
                    <div className="bars" style={{marginLeft: isOpen ? "50px" : "0px"}}>
                        <FaIcons.FaBars onClick={toggle}/>
                    </div>
                </div>
                {menuItems.map((item,index) => (
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text" style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
                    </NavLink>
                ))
                
                }
                 
            </div>
            <main>{children}</main>

           
        </div>
    );
};

export default Sidebar;