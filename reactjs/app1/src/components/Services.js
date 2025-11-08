import React from "react";
import SiteMenu from "./site_menu";

//class components 
export default class Services extends React.Component {
    render() {
        return (<div>
            <SiteMenu />
            <section className="hero-section text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold">Our Services</h1>
                    <p className="lead">Comprehensive Tech Solutions for Your Business Needs</p>
                </div>
            </section>
            {/* Services Section */}
            <section className="services-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Explore Our Services</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card service-card h-100">
                                <img src="https://source.unsplash.com/random/300x200?developer" className="card-img-top" alt="Hire Developer" />
                                <div className="card-body">
                                    <h5 className="card-title">Hire Developer</h5>
                                    <p className="card-text">Access our pool of skilled developers trained in web, mobile, AI-ML, and cybersecurity to build your next project.</p>
                                    <ul className="list-group list-group-flush mb-3">
                                        <li className="list-group-item">Vetted Professionals</li>
                                        <li className="list-group-item">Flexible Hiring Models</li>
                                        <li className="list-group-item">Customized Solutions</li>
                                    </ul>
                                    <a href="#contact" className="btn btn-primary w-100">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card service-card h-100">
                                <img src="https://source.unsplash.com/random/300x200?digital-marketing" className="card-img-top" alt="Digital Media Marketing" />
                                <div className="card-body">
                                    <h5 className="card-title">Digital Media Marketing</h5>
                                    <p className="card-text">Boost your brand with tailored digital marketing strategies, including SEO, social media, and content marketing.</p>
                                    <ul className="list-group list-group-flush mb-3">
                                        <li className="list-group-item">Targeted Campaigns</li>
                                        <li className="list-group-item">Analytics-Driven</li>
                                        <li className="list-group-item">Multi-Platform Reach</li>
                                    </ul>
                                    <a href="#contact" className="btn btn-primary w-100">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card service-card h-100">
                                <img src="https://source.unsplash.com/random/300x200?website" className="card-img-top" alt="Website Development" />
                                <div className="card-body">
                                    <h5 className="card-title">Website Development</h5>
                                    <p className="card-text">Create responsive, high-performance websites using modern technologies like HTML, CSS, JavaScript, and frameworks.</p>
                                    <ul className="list-group list-group-flush mb-3">
                                        <li className="list-group-item">Custom Designs</li>
                                        <li className="list-group-item">SEO Optimized</li>
                                        <li className="list-group-item">Fast Delivery</li>
                                    </ul>
                                    <a href="#contact" className="btn btn-primary w-100">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card service-card h-100">
                                <img src="https://source.unsplash.com/random/300x200?mobile-app" className="card-img-top" alt="Mobile App Development" />
                                <div className="card-body">
                                    <h5 className="card-title">Mobile App Development</h5>
                                    <p className="card-text">Build native and cross-platform mobile apps for iOS and Android using Flutter, React Native, and Swift.</p>
                                    <ul className="list-group list-group-flush mb-3">
                                        <li className="list-group-item">User-Centric Design</li>
                                        <li className="list-group-item">Cross-Platform Support</li>
                                        <li className="list-group-item">Scalable Solutions</li>
                                    </ul>
                                    <a href="#contact" className="btn btn-primary w-100">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Our Services Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Why Choose Our Services?</h2>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <h4>Expert Team</h4>
                            <p>Our professionals are trained in cutting-edge technologies to deliver top-quality solutions.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Customized Solutions</h4>
                            <p>We tailor our services to meet your unique business needs and goals.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Proven Results</h4>
                            <p>Our track record of successful projects ensures your satisfaction and success.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action Section */}
            <section id="contact" className="py-5 bg-light text-center">
                <div className="container">
                    <h2 className="mb-4">Ready to Transform Your Business?</h2>
                    <p className="lead mb-4">Partner with The Easylearn Academy for innovative tech solutions.</p>
                    <a href="index.html#contact" className="btn btn-primary btn-lg">Contact Us Today</a>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4">
                <div className="container">
                    <p>© 2025 The Easylearn Academy. All rights reserved.</p>
                    <p>
                        <a href="#" className="text-white me-3">Facebook</a>
                        <a href="#" className="text-white me-3">Twitter</a>
                        <a href="#" className="text-white">LinkedIn</a>
                    </p>
                </div>
            </footer>
        </div>
        );
    }
}