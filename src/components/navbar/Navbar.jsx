import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import '../navbar/navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled)
    return (
        <>
            <div className={isScrolled ? "navbar scrolled" : "navbar"}>
                <div className="container">
                    <div className="left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" alt="" />
                        <span>Home</span>
                        <span>Series</span>
                        <span>Movies</span>
                        <span>New and popular</span>
                        <span>My List</span>
                    </div>
                    <div className="right">
                        {/* Material ui search icon */}
                        <SearchIcon />
                        <span>KID</span>
                        {/* Material ui Notification icon */}
                        <NotificationsIcon />
                        <img src="https://images.pexels.com/photos/17740650/pexels-photo-17740650/free-photo-of-fashion-people-woman-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="profile">
                            {/* Dropdown icon */}
                            <ArrowDropDownIcon />
                            <div className="options">
                                <span>Settings</span>
                                <span>Logout</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar