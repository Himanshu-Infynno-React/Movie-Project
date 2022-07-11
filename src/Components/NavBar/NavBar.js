import React from 'react';
import NavBarLogo from './NavBarLogo';
import Logo from '../../images/Ellipse 1.png'
import Gift from '../../images/gift 1.png'
import Bell from '../../images/bell 1.png'

function NavBar() {
    return (
        <>
            <div className="main">
                <div>
                <NavBarLogo />
                </div>
                <nav className='navBar'>
                    <ul className='navbarList'>
                        <li className='list1'>HOME</li>
                        <ul className='list2'>
                            <li>TV SHOW</li>
                            <li>MOVIES</li>
                            <li>NEW</li>
                        </ul>
                    </ul>
                    <div className="navbarSearchBar">
                        <input type="search" placeholder='SEARCH' />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="navbarIcons">
                        <div className="giftIcon">
                            <img src={Gift} alt="" />
                        </div>
                        <div className="notificationIcon">
                            <img src={Bell} alt="" />
                        </div>
                        <div className="profile">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar