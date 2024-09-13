
// type Props = {}

import { Link } from "react-router-dom"

const NavBarComponent = () => {
    return (
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-2 bg-dark d-none d-lg-block">
                    <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <img src="/img/akukom.png" style={{ height: 62 }} alt="" />
                    </a>
                </div>
                <div className="col-lg-10">
                    <div className="row gx-0 bg-white d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-envelope text-primary me-2"></i>
                                <a href="mailto:hello@akukom.io" className="mb-0">hello@akukom.io</a>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                <i className="fa fa-phone-alt text-primary me-2"></i>
                                <a href="tel:+2348032008916" className="mb-0">+234 803 200 8916</a>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                <a className="me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="me-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="me-3" href=""><i className="fab fa-instagram"></i></a>
                                <a className="" href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <Link to="/" className="navbar-brand d-block d-lg-none">
                            <img src="/img/mobile.png" style={{ height: 32 }} alt="" />
                        </Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <a href="about.html" className="nav-item nav-link">About</a>
                                <a href="service.html" className="nav-item nav-link">Services</a>
                                <a href="room.html" className="nav-item nav-link">Rooms</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="booking.html" className="dropdown-item">Booking</a>
                                        <a href="team.html" className="dropdown-item">Our Team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <a href="https://htmlcodex.com/hotel-html-template-pro" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Get Started<i className="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBarComponent