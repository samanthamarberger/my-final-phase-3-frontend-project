import React from "react";
import { Link } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "gray",
    textDecoration: "none",
    color: "white"
};

function NavBar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" style={linkStyles}> 
                    Home
                </Link>
                <Link to="/muscle-groups" style={linkStyles}>
                    Muscle Groups
                </Link>
            </nav>
        </div>
    )
}

export default NavBar;