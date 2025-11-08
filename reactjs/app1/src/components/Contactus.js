import React from "react";
import SiteMenu from "./site_menu";
export default class CotnactUs extends React.Component {
    render() {
        return (<div>
            <SiteMenu />
            <section className="hero-section text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold">Contact Us</h1>
                    <p className="lead">Get in Touch with The Easylearn Academy</p>
                </div>
            </section>
            {/* Contact Section */}
            <section className="contact-section py-5">
                <div className="container">
                    <div className="row g-4">
                        {/* Contact Form */}
                        <div className="col-lg-6">
                            <h2 className="mb-4">Send Us a Message</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows={5} placeholder="Your Message" required defaultValue={""} />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Send Message</button>
                            </form>
                        </div>
                        {/* Contact Info & Map */}
                        <div className="col-lg-6">
                            <h2 className="mb-4">Our Location</h2>
                            <p><strong>Address:</strong> 105, Eva, Surbhi Mall, Waghawadi Rd., opp. Akshwarwadi Temple, Hill
                                Drive, Bhavnagar, Gujarat 364001</p>
                            <p><strong>Email:</strong> info@easylearnacademy.com</p>
                            <p><strong>Phone:</strong> +91 123-456-7890</p>
                            <div className="map-container mt-4">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.258270260076!2d72.14119431494315!3d21.75406998560521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a70ae66c5d9%3A0x79e1b3139eda8f90!2s105%2C%20Eva%2C%20Surbhi%20Mall%2C%20Waghawadi%20Rd.%2C%20opp.%20akshwarwadi%20temple%2C%20Hill%20Drive%2C%20Bhavnagar%2C%20Gujarat%20364001!5e0!3m2!1sen!2sin!4v1695812400000!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action Section */}
            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="mb-4">Ready to Start Your Tech Journey?</h2>
                    <p className="lead mb-4">Reach out to us for courses, services, or inquiries!</p>
                    <a href="courses.html" className="btn btn-primary btn-lg me-2">Explore Courses</a>
                    <a href="services.html" className="btn btn-outline-primary btn-lg">View Services</a>
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