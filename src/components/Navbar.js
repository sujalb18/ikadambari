import React from 'react'
// import {NavLink} from "react-router-dom";
import IkLogo from './images/ikadambari sastalogo2.jpeg'
import { Link } from 'react-router-dom';  
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg d-flex navbar-dark navcolor">
                <div class="container-fluid d-flex justify-content-between">
                    <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <img src={IkLogo} className='m-2' width={'200px'}></img>
                    {/* <a class="navbar-brand" href="#">iKadambari |</a> */}
                    </div>

                    <div className='w-50 mx-5'>
                    <form class="d-flex" role="search">
                            <input class="form-control w-75 mx-5 me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-danger mx-2" type="submit">Search</button>
                        </form>
                    </div>

                    <div class="collapse navbar-collapse d-flex mx-5" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li class="nav-item mx-1">
                                <a class="nav-link " aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item mx-1">
                                <Link class="nav-link " to="/login">Login</Link>
                                <ul class="dropdown-menu mx-1 hover-effect">
                                    <li><a class="dropdown-item  dropdown-content" href="#">Signup</a></li>
                                    <li><a class="dropdown-item  dropdown-content" href="#">Login</a></li>
                                </ul>
                                
                            </li>
                            <li class="nav-item mx-1">
                                <Link class="nav-link" to="/services">Services</Link>
                            </li>
                            <li class="nav-item dropdown mx-1">
                                <Link class="nav-link dropdown-toggle" to="/shop" role="button"  aria-expanded="false">Shop</Link>
                                <ul class="dropdown-menu mx-1 hover-effect">
                                    <li><a class="dropdown-item dropdown-content" href="#"><b><i>Categories</i></b></a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item  dropdown-content" href="#">Handicrafts</a></li>
                                    <li><a class="dropdown-item dropdown-content" href="#">Wall Arts</a></li>
                                    <li><a class="dropdown-item dropdown-content" href="#">Jewellery</a></li>
                                    <li><a class="dropdown-item dropdown-content" href="#">Textiles</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item dropdown-content" href="#"><b><i>Materials</i></b></a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-1" to="/cart">Cart</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-1" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </div>
    )
}
