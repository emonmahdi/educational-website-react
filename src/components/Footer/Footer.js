import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faLaptopCode} /> 
const Footer = () => {
    return (
        <div className='footer-body text-light'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-start">
                        <div className="logo-footer mb-3">
                            <a class="navbar-brand text-warning fw-bold "href="/home"> 
                            {element} Easy-Programming
                            </a>
                        </div>
                        <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                        <div className="social-link">
                            <a className='text-warning' href="/facebook">Facebook</a> 
                            <a className='text-warning' href="/facebook">LinkedIn</a>
                            <a className='text-warning' href="/facebook">Twitter</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>Cources</h3>
                        <div className="cources-item">
                            <a href="/web">Web Design</a>
                            <a href="/webdev">Web Development</a>
                            <a href="/python">Python</a>
                            <a href="/javascript">Javascript</a>
                            <a href="/react">React</a>
                        </div>
                    </div> 
                    <div className="col-md-4">
                        <h3>Subscriptoin</h3>
                        <input type="text" className='form-control ' />
                        <button className='btn btn-primary mt-3'>Subcribe</button>
                    </div>
                </div>
            </div>
            <div className="copyright p-2 bg-secondary">
                <p>Copyright &copy; ALl Right Resered <span className='text-warning'>Eassy-Programming</span> </p>
            </div>
        </div>
    );
};

export default Footer;