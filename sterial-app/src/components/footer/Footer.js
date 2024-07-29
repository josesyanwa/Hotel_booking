import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaPinterest, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3>About CAWA Kenya Tours & Travel<span className="text-primary">.</span></h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="widget">
              <h3>Connect</h3>
              <ul className="list-unstyled iconiics">
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaFacebook /></a></li>
                <li><a href="#"><FaLinkedin /></a></li>
                <li><a href="#"><FaPinterest /></a></li>
                <li><a href="#"><FaDribbble /></a></li>
              </ul>
            </div>
          </div>

          {/* <div className="col-lg-2 ml-auto">
            <div className="widget">
              <h3>Links</h3>
              <ul className="list-unstyled float-left links">
                <li><Link href="#">About us</Link></li>
                <li><Link href="#">Services</Link></li>
                <li><Link href="#">News</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
          </div> */}

          <div className="col-lg-2">
            <div className="widget">
              <h3>Company</h3>
              <ul className="list-unstyled float-left links">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                {/* <li><Link href="#">Careers</Link></li> */}
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <h3>Contact</h3>
              {/* <address>43 Raymouth Rd. Baltemoer, London 3910</address> */}
              <ul className="list-unstyled links mb-4">
                <li><a href="tel://11234567890">+254 726 462 757</a></li>
                {/* <li><a href="tel://11234567890">+1(123)-456-7890</a></li> */}
                <li><a href="mailto:info@mydomain.com">caroline.wambui@cawatours.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="mb-0">Copyright &copy; {new Date().getFullYear()} All Rights Reserved. &mdash; Designed with love by <a href="https://cloudwise.co.ke/">Cloudwise Limited</a> </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
