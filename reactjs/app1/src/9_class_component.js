// Develop Digital clock which will display Time & date.
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './website.css';
import React, { useEffect } from 'react';

function GameOfThrone(){
    return(
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
            <a className="navbar-brand" href="#">
                <img src="https://via.placeholder.com/40x40?text=Dragon+Logo" alt="Dragon Logo"/>
                Game of Thrones
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#story">Story</a></li>
                    <li className="nav-item"><a className="nav-link" href="#characters">Characters</a></li>
                    <li className="nav-item"><a className="nav-link" href="#photos">Photos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                </ul>
                </div>
                </div>
            </nav>

    {/* Slider */}
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" className="d-block w-100" alt="Epic Throne Scene"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1>Game of Thrones</h1>
                    <p>Epic Fantasy Awaits</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" className="d-block w-100" alt="Dragon in Flight">
                <div className="carousel-caption d-none d-md-block">
                    <h1>Battle for the Throne</h1>
                    <p>Join the Epic Saga</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    {/* Story Section */}
    <section id="story" className="section-padding">
        <div className="container">
            <h2 className="text-center mb-5">The Story</h2>
            <p className="lead text-center">
                In the mythical continent of Westeros, several powerful families fight for control of the Iron Throne. 
                As seasons change and ancient threats emerge, noble houses navigate treachery, dragons, and political intrigue 
                in an epic struggle for power. Follow the tales of honor, betrayal, and destiny in *Game of Thrones*.
            </p>
        </div>
    </section>

    {/* Main Characters Section */}
    <section id="characters" className="section-padding bg-secondary">
        <div className="container">
            <h2 className="text-center mb-5">Main Characters</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card character-card text-white">
                        <img src="https://images.unsplash.com/photo-1506794778202-6d8d61e2f7f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80" className="card-img-top" alt="Jon Snow">
                        <div className="card-body">
                            <h5 className="card-title">Jon Snow</h5>
                            <p className="card-text">The honorable bastard of House Stark, destined for greatness.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card character-card text-white">
                        <img src="https://images.unsplash.com/photo-1515886657613-9d3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80" className="card-img-top" alt="Daenerys Targaryen">
                        <div className="card-body">
                            <h5 className="card-title">Daenerys Targaryen</h5>
                            <p className="card-text">Mother of Dragons, seeking to reclaim her birthright.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card character-card text-white">
                        <img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80" className="card-img-top" alt="Tyrion Lannister">
                        <div className="card-body">
                            <h5 className="card-title">Tyrion Lannister</h5>
                            <p className="card-text">The witty and cunning dwarf of House Lannister.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Photos Section */}
    <section id="photos" className="section-padding">
        <div className="container">
            <h2 className="text-center mb-5">Photos</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card photo-card">
                        <img src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" className="card-img-top" alt="Battle Scene">
                    </div>
                </div>
                <div className="col">
                    <div className="card photo-card">
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" className="card-img-top" alt="Winterfell">
                    </div>
                </div>
                <div className="col">
                    <div className="card photo-card">
                        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" className="card-img-top" alt="Dragon">
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Customer Testimonials Section */}
    <section id="testimonials" className="section-padding bg-secondary">
        <div className="container">
            <h2 className="text-center mb-5">What Fans Say</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="testimonial-card text-center">
                        <p>"An epic saga that keeps you on the edge of your seat!"</p>
                        <h5>- John D.</h5>
                    </div>
                </div>
                <div className="col">
                    <div className="testimonial-card text-center">
                        <p>"The best fantasy series ever made. Dragons, battles, and intrigue!"</p>
                        <h5>- Sarah K.</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="footer text-center">
        <div className="container">
            <p>&copy; 2025 Game of Thrones. All rights reserved.</p>
            <p>Follow us: 
                <a href="#" className="mx-2">Twitter</a> | 
                <a href="#" className="mx-2">Facebook</a> | 
                <a href="#" className="mx-2">Instagram</a>
            </p>
            </div>
            </footer>
        </div>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GameOfThrone />); //calling function which must return JSX
