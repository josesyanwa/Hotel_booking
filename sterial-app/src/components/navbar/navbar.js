import React from "react";
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="site-nav mt-3">
      <div className="container">
        <div className="site-navigation">
          <div className="row">
            <div className="col-6 col-lg-3">
              <a href="index.html" className="logo m-0 float-start">Sterial</a>
            </div>
            <div className="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap">
              <ul className="js-clone-nav text-center site-menu p-0 m-0">
                <li className="active"><Link href= "/">Home</Link></li>
                <li className="active"><Link href= "/about">About us</Link></li>

                {/* <li className="has-children">
                <Link href= "#">Dropdown</Link>
                  <ul className="dropdown">
                    <li><a href="#">Menu One</a></li>
                    <li className="has-children">
                      <a href="#">Menu Two</a>
                      <ul className="dropdown">
                        <li><a href="#">Sub Menu One</a></li>
                        <li><a href="#">Sub Menu Two</a></li>
                        <li><a href="#">Sub Menu Three</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Menu Three</a></li>
                  </ul>
                </li> */}
                
                <li className="active"><Link href= "/services">Services</Link></li>
                
                <li className="active"><Link href= "/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 text-lg-end">
              <ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu">
                <li className="cta-button"><Link href="/contact">Contact Us</Link></li>
              </ul>

              <a href="#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
