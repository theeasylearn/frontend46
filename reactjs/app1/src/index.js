// Develop Digital clock which will display Time & date.
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './website.css';
import React, { useEffect } from 'react';
//functional component
function Menu() {
    return (<nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <a className="navbar-brand text-light" href="#">Fusion Bites</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#carousel">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
                    <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                    <li className="nav-item"><a className="nav-link" href="#footer">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>);
}
function Slider() {
    return (<section id="carousel">
        <div id="restaurantCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://picsum.photos/1200/300/?random=1" className="d-block w-100" alt="Dish 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Welcome to Fusion Bites</h1>
                        <p>Experience the fusion of flavors</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/1200/300/?random=2" className="d-block w-100" alt="Dish 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Fresh Ingredients</h1>
                        <p>Sourced locally for ultimate taste</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/1200/300/?random=3" className="d-block w-100" alt="Dish 3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Cozy Ambiance</h1>
                        <p>Perfect for any occasion</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>)
}
function Aboutus() {
    return (<section id="about" className="bg-dark fade-in">
        <div className="container">
            <h2 className="text-center mb-5">About Us</h2>
            <p className="text-center">Fusion Bites is a modern restaurant blending global cuisines with local ingredients. Established in 2020, we focus on sustainable practices and innovative dishes that delight the senses. Our team of passionate chefs creates memorable dining experiences in a welcoming atmosphere.</p>
        </div>
    </section>);
}
function FoodMenu() {
    return (<section id="menu" className="fade-in">
        <div className="container">
            <h2 className="text-center mb-5">Our Menu</h2>
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="card text-center">
                        <img src="https://picsum.photos/300/200/?random=1" className="card-img-top" alt="Item 1" />
                        <div className="card-body">
                            <h5 className="card-title">Spicy Tuna Roll</h5>
                            <p className="card-text">$12.99</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <img src="https://picsum.photos/300/200/?random=2" className="card-img-top" alt="Item 2" />
                        <div className="card-body">
                            <h5 className="card-title">Grilled Salmon</h5>
                            <p className="card-text">$18.99</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <img src="https://picsum.photos/300/200/?random=3" className="card-img-top" alt="Item 3" />
                        <div className="card-body">
                            <h5 className="card-title">Veggie Stir Fry</h5>
                            <p className="card-text">$10.99</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <img src="https://picsum.photos/300/200/?random=4" className="card-img-top" alt="Item 4" />
                        <div className="card-body">
                            <h5 className="card-title">Beef Burger</h5>
                            <p className="card-text">$14.99</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <img src="https://picsum.photos/300/200/?random=5" className="card-img-top" alt="Item 5" />
                        <div className="card-body">
                            <h5 className="card-title">Pasta Primavera</h5>
                            <p className="card-text">$13.99</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <img src="https://picsum.photos/300/200/?random=6" className="card-img-top" alt="Item 6" />
                        <div className="card-body">
                            <h5 className="card-title">Chicken Curry</h5>
                            <p className="card-text">$15.99</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <img src="https://picsum.photos/300/200/?random=7" className="card-img-top" alt="Item 7" />
                        <div className="card-body">
                            <h5 className="card-title">Chocolate Lava Cake</h5>
                            <p className="card-text">$8.99</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <img src="https://picsum.photos/300/200/?random=8" className="card-img-top" alt="Item 8" />
                        <div className="card-body">
                            <h5 className="card-title">Fresh Salad</h5>
                            <p className="card-text">$9.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
function Testimonials() {
    return (<section id="testimonials" className="bg-secondary fade-in">
        <div className="container">
            <h2 className="text-center mb-5 text-white">What Our Customers Say</h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="testimonial-card p-4 text-center">
                        <p>"Amazing food and service! The fusion flavors are out of this world."</p>
                        <h6>- John Doe</h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card p-4 text-center">
                        <p>"Cozy atmosphere and delicious dishes. Highly recommend!"</p>
                        <h6>- Jane Smith</h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card p-4 text-center">
                        <p>"Best restaurant in town. The menu is innovative and fresh."</p>
                        <h6>- Mike Johnson</h6>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card p-4 text-center">
                        <p>"Loved the desserts! Will be back soon."</p>
                        <h6>- Emily Davis</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
function MyFooter() {
    return (<footer id="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h5>Contact Us</h5>
                    <p>105,223 Eva surbhi, opp aksharwadi temple, <br /> waghawadi road, bhavnagar <br />
                        364001
                    </p>
                </div>
                <div className="col-md-6">
                    <h5>Our Location</h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.676341867972!2d72.14115407369297!3d21.754069880083005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a70ae66c5d9%3A0x79e1b3139eda8f90!2sThe%20Easy%20Learn%20Academy!5e0!3m2!1sen!2sin!4v1756870462347!5m2!1sen!2sin" width="100%" height={300} style={{ "border": "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 pt-3">
                    <p className="text-center text-white">
                        Developed by : frontend 46 @ the easylearn academy
                    </p>
                </div>
            </div>
        </div>
    </footer>);
}
function Website() {
    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        sections.forEach((section) => observer.observe(section));

        // Cleanup observer on component unmount
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);
    return (<div>
        <Menu />
        {/* Carousel (Full-page Header Trend) */}
        <Slider />
        {/* About Us */}
        <Aboutus />
        {/* Menu (8 Items) */}
        <FoodMenu />
        {/* Customer Testimonials (4) */}
        <Testimonials />
        {/* Footer (Address & Map) */}
        <MyFooter />
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Website />); //calling function which must return JSX
