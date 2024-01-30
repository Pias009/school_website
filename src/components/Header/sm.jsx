// ResponsiveNavbar.js

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "components";
import "./sm.css";  // Import the CSS file

const NavbarButton = ({ label, path, onClick }) => {
    const { pathname } = useLocation();
    const isActive = pathname === path;

    return (
        <Button
            className={`common-pointer !text-gray-900 cursor-pointer font-medium font-outfit h-20 sm:h-[31px] text-center text-xl navbar-button ${isActive ? 'active-button' : ''}`}
            onClick={onClick}
        >
            <Link to={path}>{label}</Link>
        </Button>
    );
};

const ResponsiveNavbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="bg-white-A700 p-4">
            <div className="flex items-center justify-between">
                <button
                    className="md:visible w-full min-w-[500px] common-pointer text-gray-900 cursor-pointer font-medium font-outfit h-20 sm:h-[31px] outline outline-gray-900 text-center text-xl"
                    onClick={toggleMenu}
                >
                    Menu
                </button>
            </div>

            {isMenuOpen && (
                <div className="flex flex-col items-center justify-center gap-4">
                    <NavbarButton label="Home" path="/homepagedesktop" onClick={closeMenu} />
                    <NavbarButton label="About Us" path="/aboutpagedesktop" onClick={closeMenu} />
                    <NavbarButton label="Academics" path="/academicspagedesktop" onClick={closeMenu} />
                    <NavbarButton label="Admissions" path="/admissionpagedesktop" onClick={closeMenu} />
                    <NavbarButton label="Student Life" path="/studentlifepagedesktop" onClick={closeMenu} />
                    <NavbarButton label="Contact" path="/contactpagedesktop" onClick={closeMenu} />
                </div>
            )}

            <ul className="flex gap-4 items-center justify-center md:hidden" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ minWidth: '200px', transition: 'background-color 0.3s, opacity 0.3s' }}>
                    <NavbarButton className="w-8" label="Home" path="/homepagedesktop" onClick={() => navigate("/homepagedesktop")} />
                </li>
                <li style={{ minWidth: '200px', transition: 'background-color 0.3s, opacity 0.3s' }}>
                    <NavbarButton label="About Us" path="/aboutpagedesktop" onClick={() => navigate("/aboutpagedesktop")} />
                </li>
                <li style={{ minWidth: '200px', transition: 'background-color 0.3s, opacity 0.3s' }}>
                    <NavbarButton label="Academics" path="/academicspagedesktop" onClick={() => navigate("/academicspagedesktop")} />
                </li>
                <li style={{ minWidth: '200px', transition: 'background-color 0.3s, opacity 0.3s' }}>
                    <NavbarButton label="Admissions" path="/admissionpagedesktop" onClick={() => navigate("/admissionpagedesktop")} />
                </li>
                <li style={{ minWidth: '200px', transition: 'background-color 0.3s, opacity 0.3s' }}>
                    <NavbarButton label="Student Life" path="/studentlifepagedesktop" onClick={() => navigate("/studentlifepagedesktop")} />
                </li>
                <li style={{ minWidth: '200px', transition: 'background-color 0.3s, opacity 0.3s' }}>
                    <NavbarButton label="Contact" path="/contactpagedesktop" onClick={() => navigate("/contactpagedesktop")} />
                </li>
            </ul>
        </nav>
    );
};

export default ResponsiveNavbar;
