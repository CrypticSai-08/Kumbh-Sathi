import React, {useState}  from "react";
import styled  from "styled-components";
import logo from "../assets/logo.png"
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';

const Navbar = () => {
    const [navbarState,setNavbarState] = useState(false);
    return ( 
        <>
            <Nav id="top">
                <div className="brand">
                    <div className="container">
                        <img src={logo} alt="" />
                        
                    </div>
                    <div className="toggle">
                        {
                            navbarState ? <VscChromeClose onClick={()=>setNavbarState(false)}/> : <GiHamburgerMenu onClick={()=>setNavbarState(true)} />
                        }
                    </div>
                </div>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#recommend">Places</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
                <button>Connect</button>
            </Nav>
            <ResponsiveNav state={navbarState}>
                <ul>
                    <li><a href="#hero" onClick={()=>setNavbarState(false)}>Home</a></li>
                    <li><a href="#services" onClick={()=>setNavbarState(false)}>Services</a></li>
                    <li><a href="#recommend" onClick={()=>setNavbarState(false)}>Places</a></li>
                    <li><a href="#testimonials" onClick={()=>setNavbarState(false)}>Testimonials</a></li>      
                </ul>
            </ResponsiveNav>
        </>
     );
}
export default Navbar;
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .brand{
        .container{
            cursor:pointer;
            display:flex;
            justify-content:center;
            align-items:center;
            gap: 0.4rem;
            font-size: 1.2rem;
            font-weight: 900;
            text-transform: uppercase;
        }
        .toggle{
            display: none;
        }
    }
    ul{
        display: flex;
        gap: 1rem;
        list-style: none;
        li{
            a{
                text-decoration: none;
                textcolor: #ffd700;
                color: #0059b3;
                font-size: 1.2rem;
                trasnsition: 0.1s ease-in-out;
                &:hover{
                    color: #023e8a;
                }
            }
            &:first-of-type{
                a{
                    color: #023e8a;
                    font-weight: 900;
                }
            }
        } 
    }

    button{
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 1rem;
        border: none;
        // background-color: #48caed;
        background-color: #FF9933;
        color: white;
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        transition: 0.3s ease-in-out;
        &:hover{
            background-color: #023e8a;
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px){
        .brand{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .toggle{
                display: block;
            }
        }
        ul, button{
            display: none;
        }
    }
`;
const ResponsiveNav = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    background-color: white;
    z-index: 2;
    height: 30vh;
    align-items: center;
    transition: 0.3s ease-in-out;
    top: ${({ state }) => (state ? "50px" : "-400px")};
    // top: ${({ state }) => (state ? "50px" : "-400px")};

    ul{
        list-style-type: none;
        width: 100%;
        li{
            width: 100%;
            margin: 1rem 0;
            margin-left: 2rem;
            a{
                text-decoration: none;
                color: #0077b6;
                font-size: 1.2rem;
                transition: 0.3s ease-in-out;
                &:hover{
                    color: #023e8a;
                }
            }
            &:first-of-type{
                a{
                    color: #023e8a;
                    font-weight: 900;
                }
            }
        }
    }
`;