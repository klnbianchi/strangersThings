import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = (props) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
              }
        };

        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive]);

return (
    <div className="menu-container">
        <Link to="/profile" onClick={onClick} className="nav-link">PROFILE</Link>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
                <li><a href="/profile/messages">Messages</a></li>
                <li><a href="/profile/userposts">My Posts</a></li>
            </ul>
        </nav>
    </div>
);
    };

export default DropdownMenu;