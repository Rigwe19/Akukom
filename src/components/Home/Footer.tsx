import { MouseEvent } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6"
import { Link } from "react-router-dom";

const Footer = () => {
    const scroll = (event: MouseEvent, selector: string) => {
        event.preventDefault()
        const section = document.querySelector(selector);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container pb-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-primary rounded p-4">
                            <Link to="/"><h1 className="text-white text-uppercase mb-3">Akukom</h1></Link>
                            <p className="text-white mb-0">
                                Join us in our mission to keep stories alive. For more information on partnerships and collaborations, please contact us at let’'s work together to create a lasting impact and preserve the stories that matter most
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i><a href="https://wa.link/yjy4fm" target="_blank" className="mb-0">+234 803 200 8916</a></p>

                        <p className="mb-2"><i className="fa fa-envelope me-3"></i><a href="mailto:hello@akukom.io" className="mb-0">hello@akukom.io</a></p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.facebook.com/akukom.io"> <FaFacebookF size={20} /></a>
                            <a className="btn btn-outline-light btn-social" target="_blank" href="https://x.com/akukomio"><FaXTwitter size={20} /></a>
                            <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.linkedin.com/company/akukomio/"><FaLinkedinIn size={20} /></a>
                            <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.instagram.com/akukom.io?igsh=YzljYTk1ODg3Zg=="><FaInstagram size={20} /></a>
                            <a className="btn btn-outline-light btn-social" target="_blank" href="https://youtube.com/@akukomio?si=Xzv-gziNo2HVIWtk"><FaYoutube size={20} /></a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row gy-5 g-4">
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <button type="button" onClick={(e) => scroll(e, '#about')} className="btn btn-link">About Us</button>
                                <button type="button" onClick={(e) => scroll(e, '#mission')} className="btn btn-link">Our Mission</button>
                                <button type="button" onClick={(e) => scroll(e, '#vision')} className="btn btn-link">Our Vision</button>
                                <button type="button" onClick={(e) => scroll(e, '#passion')} className="btn btn-link">Our Passion</button>
                                <button type="button" onClick={(e) => scroll(e, '#designed-for')} className="btn btn-link">Who we designed for</button>
                            </div>
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                <a onClick={(e) => scroll(e, '#service')} className="btn btn-link" href="">Our Service</a>
                                <a onClick={(e) => scroll(e, '#works')} className="btn btn-link" href="">How the Platform works</a>
                                <a onClick={(e) => scroll(e, '#community')} className="btn btn-link" href="">Our community</a>
                                <a onClick={(e) => scroll(e, '#plans')} className="btn btn-link" href="">Our Plans</a>
                                <a onClick={(e) => scroll(e, '#partners')} className="btn btn-link" href="">Partner with us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="/">Akukom</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="/">Home</Link>
                                <a onClick={(e) => scroll(e, '#faqs')} href="">FAQs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer