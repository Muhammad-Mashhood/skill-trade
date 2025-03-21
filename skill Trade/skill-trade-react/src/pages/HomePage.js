import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const HomePage = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleJoinNowClick = () => {
        if (isLoggedIn) {
            // If logged in, scroll to skills section
            document.querySelector('.skills-section').scrollIntoView({ behavior: 'smooth' });
        } else {
            // If not logged in, go to register page
            navigate('/register');
        }
    };

    // Set up auto-sliding carousel
    useEffect(() => {
        const carousel = document.getElementById('heroSlider');
        const carouselInstance = new window.bootstrap.Carousel(carousel, {
            interval: 5000,  // 5 seconds
            wrap: true,      // Continuous loop
            keyboard: false, // Disable keyboard controls
            pause: false,    // Don't pause on hover
            touch: false     // Disable touch/swipe
        });

        // Start the carousel
        carouselInstance.cycle();

        return () => {
            // Clean up
            carouselInstance.dispose();
        };
    }, []);

    return (
        <>
            <Navbar />
            
            {/* Hero Slider - Completely rebuilt */}
            <div className="hero-section">
                <div id="heroSlider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="hero-slide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200')" }}>
                                <div className="hero-content">
                                    <h1>Let's Trade Skills...</h1>
                                    <button type="button" id="joinNowBtn" onClick={handleJoinNowClick} className="btn btn-outline-light">
                                        {isLoggedIn ? 'Explore Skills' : 'Join Now!'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="hero-slide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200')" }}>
                                <div className="hero-content">
                                    <h1>Learn and Connect</h1>
                                    <p>Connect with skilled professionals</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="hero-slide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200')" }}>
                                <div className="hero-content">
                                    <h1>Start Trading Skills Today!</h1>
                                    <p>Sign up now and connect with experts worldwide!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Skills Section with Sliders */}
            <div className="skills-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Explore Skills</h2>
                    
                    {/* Featured Courses Slider */}
                    <div className="course-slider-section mb-5">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="slider-title">Featured Courses</h3>
                            <Link to="/courses" className="view-all-link">View All</Link>
                        </div>
                        
                        <div id="featuredCoursesSlider" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400" alt="Coding" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Web Development</h3>
                                                    <p>I will teach web development in exchange for graphic design.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=400" alt="Yoga" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Yoga Classes</h3>
                                                    <p>I will teach yoga in exchange for cooking lessons.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?auto=format&fit=crop&q=80&w=400" alt="Photography" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Photography</h3>
                                                    <p>I will teach photography in exchange for language lessons.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400" alt="Cooking" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Cooking Classes</h3>
                                                    <p>I will teach cooking in exchange for fitness training.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=400" alt="Guitar" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Guitar Lessons</h3>
                                                    <p>I will teach guitar in exchange for math tutoring.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=400" alt="Painting" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Painting</h3>
                                                    <p>I will teach painting in exchange for gardening tips.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#featuredCoursesSlider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#featuredCoursesSlider" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    
                    {/* Most Viewed Courses Slider */}
                    <div className="course-slider-section mb-5">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="slider-title">Most Viewed Courses</h3>
                            <Link to="/courses" className="view-all-link">View All</Link>
                        </div>
                        
                        <div id="mostViewedCoursesSlider" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" alt="Coding" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Mobile App Development</h3>
                                                    <p>I will teach app development in exchange for UI/UX design.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&q=80&w=400" alt="Piano" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Piano Lessons</h3>
                                                    <p>I will teach piano in exchange for language lessons.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=400" alt="DevOps" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>DevOps</h3>
                                                    <p>I will teach DevOps in exchange for machine learning.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400" alt="Science" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Science Tutoring</h3>
                                                    <p>I will teach science in exchange for music lessons.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1574757987642-5755f0839101?auto=format&fit=crop&q=80&w=400" alt="Pottery" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Pottery</h3>
                                                    <p>I will teach pottery in exchange for photography.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" alt="Fitness" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Fitness Training</h3>
                                                    <p>I will teach fitness in exchange for cooking lessons.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#mostViewedCoursesSlider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#mostViewedCoursesSlider" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    
                    {/* Trending Courses Slider */}
                    <div className="course-slider-section">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="slider-title">Trending Courses</h3>
                            <Link to="/courses" className="view-all-link">View All</Link>
                        </div>
                        
                        <div id="trendingCoursesSlider" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400" alt="Digital Marketing" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Digital Marketing</h3>
                                                    <p>I will teach digital marketing in exchange for web development.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400" alt="Data Science" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Data Science</h3>
                                                    <p>I will teach data science in exchange for UI/UX design.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&q=80&w=400" alt="Language" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Language Learning</h3>
                                                    <p>I will teach Spanish in exchange for coding lessons.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400" alt="Business" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Business Strategy</h3>
                                                    <p>I will teach business strategy in exchange for graphic design.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400" alt="3D Printing" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>3D Printing</h3>
                                                    <p>I will teach 3D printing in exchange for CAD design.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="skill-card">
                                                <div className="skill-card-image">
                                                    <img src="https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?auto=format&fit=crop&q=80&w=400" alt="Gardening" />
                                                </div>
                                                <div className="skill-card-content">
                                                    <h3>Gardening</h3>
                                                    <p>I will teach gardening in exchange for cooking lessons.</p>
                                                    <button className="btn btn-primary">Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#trendingCoursesSlider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#trendingCoursesSlider" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default HomePage;