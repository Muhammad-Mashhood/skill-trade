import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row g-4">
                    {/* About Section */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="footer-brand">Skill Trade</h3>
                        <p className="footer-text">Connect, learn, and grow with our global community of skilled professionals. Trade your expertise and expand your knowledge.</p>
                        <div className="social-links">
                            <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="social-link"><i className="bi bi-github"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">Find Skills</a></li>
                            <li><a href="#">Become a Teacher</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="footer-title">Support</h4>
                        <ul className="footer-links">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Newsletter - Keep this one with the better styling */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading">Subscribe</h5>
                        <p className="footer-text">Stay updated with our latest news and offers.</p>
                        <div className="subscribe-form">
                            <input type="email" placeholder="Your email" className="subscribe-input" />
                            <button type="submit" className="subscribe-button">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom" style={{ borderTop: 'none' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="copyright">© 2025 Skill Trade. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;