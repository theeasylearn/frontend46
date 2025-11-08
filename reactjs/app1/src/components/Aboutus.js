import SiteMenu from "./site_menu";

export default function Aboutus() {
    return (<div>
        <SiteMenu />
        {/* Hero Section */}
        <section className="hero-section text-center">
            <div className="container">
                <h1 className="display-4 fw-bold">About The Easylearn Academy</h1>
                <p className="lead">Empowering Future Tech Leaders with World-Class Training</p>
            </div>
        </section>
        {/* Mission Section */}
        <section className="mission-section py-5">
            <div className="container">
                <h2 className="text-center mb-5">Our Mission</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p>At The Easylearn Academy, our mission is to bridge the gap between aspiration and achievement in the tech world. We provide top-tier coaching in Web Development, Mobile Development, AI &amp; Machine Learning, and Cybersecurity, ensuring our students are equipped with the skills to thrive in the digital age.</p>
                        <p>With a focus on practical, hands-on learning and real-world projects, we empower individuals to transform their careers and contribute meaningfully to the technology industry.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://source.unsplash.com/random/600x400?technology" className="img-fluid rounded" alt="Our Mission" />
                    </div>
                </div>
            </div>
        </section>
        {/* Our Team Section */}
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Meet Our Team</h2>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card team-card h-100 text-center">
                            <img src="https://source.unsplash.com/random/200x200?person1" className="card-img-top rounded-circle mt-3 mx-auto" style={{ "width": "150px", "height": "150px" }} alt="Team Member" />
                            <div className="card-body">
                                <h5 className="card-title">John Doe</h5>
                                <p className="card-text">Lead Instructor - Web Development</p>
                                <p>With over 15 years of experience in full-stack development, John guides students in mastering modern web technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card team-card h-100 text-center">
                            <img src="https://source.unsplash.com/random/200x200?person2" className="card-img-top rounded-circle mt-3 mx-auto" style={{ "width": "150px", "height": "150px" }} alt="Team Member" />
                            <div className="card-body">
                                <h5 className="card-title">Jane Smith</h5>
                                <p className="card-text">Mobile Development Expert</p>
                                <p>Jane specializes in iOS and Android app development, helping students build robust mobile applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card team-card h-100 text-center">
                            <img src="https://source.unsplash.com/random/200x200?person3" className="card-img-top rounded-circle mt-3 mx-auto" style={{ "width": "150px", "height": "150px" }} alt="Team Member" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Alex Carter</h5>
                                <p className="card-text">AI &amp; ML Specialist</p>
                                <p>Alex holds a PhD in Machine Learning and teaches cutting-edge AI techniques with real-world applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card team-card h-100 text-center">
                            <img src="https://source.unsplash.com/random/200x200?person4" className="card-img-top rounded-circle mt-3 mx-auto" style={{ "width": "150px", "height": "150px" }} alt="Team Member" />
                            <div className="card-body">
                                <h5 className="card-title">Sarah Brown</h5>
                                <p className="card-text">Cybersecurity Guru</p>
                                <p>Sarah is a certified ethical hacker, training students to secure systems and networks effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Why Choose The Easylearn Academy?</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <h4>Expert Instructors</h4>
                        <p>Learn from industry professionals with years of real-world experience.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Hands-On Learning</h4>
                        <p>Work on practical projects to build a portfolio that stands out.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Flexible Learning</h4>
                        <p>Access courses online or in-person, tailored to your schedule.</p>
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