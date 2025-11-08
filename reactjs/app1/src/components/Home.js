import { Link } from "react-router-dom";
import SiteMenu from "./site_menu";
export default function Home() {
    return (<div>
        <SiteMenu />
        <section id="home" className="hero-section text-center">
            <div className="container">
                <h1 className="display-4 fw-bold">The Easylearn Academy</h1>
                <p className="lead">Master Web, Mobile, AI-ML, and Cybersecurity with Expert Coaching</p>
                <a href="#courses" className="btn btn-primary btn-lg mt-3">Explore Courses</a>
            </div>
        </section>
        {/* Courses Section */}
        <section id="courses" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Our Courses</h2>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card course-card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">Learn HTML, CSS, JavaScript, and modern frameworks to build responsive websites.</p>
                                <a href="#" className="btn btn-outline-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card course-card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Mobile Development</h5>
                                <p className="card-text">Develop native and cross-platform mobile apps for iOS and Android.</p>
                                <a href="#" className="btn btn-outline-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card course-card h-100">
                            <div className="card-body">
                                <h5 className="card-title">AI &amp; Machine Learning</h5>
                                <p className="card-text">Master AI concepts, machine learning algorithms, and tools like TensorFlow.</p>
                                <a href="#" className="btn btn-outline-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card course-card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Cybersecurity</h5>
                                <p className="card-text">Learn to protect systems and networks with ethical hacking and security practices.</p>
                                <a href="#" className="btn btn-outline-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">About Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p>The Easylearn Academy is dedicated to empowering individuals with cutting-edge skills in software development. Our expert instructors provide hands-on training in Web Development, Mobile Development, AI &amp; Machine Learning, and Cybersecurity.</p>
                        <p>With a focus on practical learning and real-world projects, we prepare our students for successful careers in technology.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://source.unsplash.com/random/600x400?learning" className="img-fluid rounded" alt="Learning Environment" />
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Get in Touch</h2>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows={4} placeholder="Your Message" defaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
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