import { Link } from "react-router-dom"
import { articles } from "@/data/articles"
import { Children, MouseEvent } from "react"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

const NavBarComponent = () => {
    const scroll = (event: MouseEvent, selector: string) => {
        event.preventDefault()
        const section = document.querySelector(selector);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <section id="nav" className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-2 bg-white d-none d-lg-block">
                    <a href="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
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
                                <a className="me-3" target="_blank" href="https://www.facebook.com/akukom.io"> <FaFacebookF /></a>
                                <a className="me-3" target="_blank" href="https://x.com/akukomio"><FaXTwitter /></a>
                                <a className="me-3" target="_blank" href="https://www.linkedin.com/company/akukomio/"><FaLinkedinIn /></a>
                                <a className="me-3" target="_blank" href="https://www.instagram.com/akukom.io?igsh=YzljYTk1ODg3Zg=="><FaInstagram /></a>
                                <a className="" target="_blank" href="https://youtube.com/@akukomio?si=Xzv-gziNo2HVIWtk"><FaYoutube /></a>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-white navbar-dark p-3 p-lg-0">
                        <Link to="/" className="navbar-brand d-block d-lg-none">
                            <img src="/img/mobile.png" style={{ height: 32 }} alt="" />
                        </Link>
                        <button type="button" className="navbar-toggler text-primary" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between mx-3" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <a href="/" onClick={(e) => scroll(e, '#about')} className="nav-item nav-link">About</a>
                                <a href="/" onClick={(e) => scroll(e, '#about')} className="nav-item nav-link">Vision</a>
                                <a href="/" onClick={(e) => scroll(e, '#mission')} className="nav-item nav-link">Mission</a>
                                <a href="/" onClick={(e) => scroll(e, '#passion')} className="nav-item nav-link">Passion</a>
                                <div className="nav-item dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a onClick={(e) => scroll(e, '#service')} className="dropdown-item" href="/">Our Service</a>
                                        <a onClick={(e) => scroll(e, '#works')} className="dropdown-item" href="/">How the Platform works</a>
                                        <a onClick={(e) => scroll(e, '#community')} className="dropdown-item" href="/">Our community</a>
                                        <a onClick={(e) => scroll(e, '#plans')} className="dropdown-item" href="/">Our Plans</a>
                                        <a onClick={(e) => scroll(e, '#partners')} className="dropdown-item" href="/">Partner with us</a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Posts</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        {Children.toArray(articles.map(article => <Link to={`/article/${article.slug}`} className="dropdown-item">{article.title}</Link>))}
                                    </div>
                                </div>
                                {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                            </div>
                            <div className="row w-auto">
                                <a href="/" className="btn btn-link text-dark shadow-none w-auto rounded-5 d-none d-lg-block">Log In</a>
                                <button className="btn bg-dark w-auto text-white rounded-pill d-none d-lg-block">Start for Free</button>
                            </div>

                        </div>
                    </nav>
                </div>
            </div >
        </section>
    )
}

export default NavBarComponent