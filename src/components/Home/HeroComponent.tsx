import { RxDoubleArrowDown } from 'react-icons/rx'
import './hero.css'
// type Props = {}

const HeroComponent = () => {
    const scroll = (selector: string) => {
        const section = document.querySelector(selector);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div className="container-fluid p-0 mb-5 hero">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="/img/carousel-1.jpg" alt="carousel" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: 700 }}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Preserve Your Family Legacy</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">
                                    One Story At A Time</h1>
                                <p className="text-white mb-4 animated zoomIn">Preserve family legacies and build connections across generations with Akukom’s interactive storytelling platform.</p>
                                <div className="d-flex flex-column gap-4">
                                    <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Started for Free</a>
                                    <button onClick={() => scroll('#about')} className="py-md-3 px-md-5 animated slideInRight bg-transparent border-0 text-white d-flex flex-column justify-content-center align-items-center" style={{ fontSize: 26, fontWeight: 600 }}>
                                        <span>Learn More About Akukom</span>
                                        <RxDoubleArrowDown size={32} color='#fff' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="/img/carousel-2.jpg" alt="carousel" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: 700 }}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Connecting Families Through</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Stories</h1>
                                <p className="text-white mb-4 animated zoomIn">Create, share, and treasure your family's memories with Akukom's secured and personalised storytelling tools</p>
                                <div className="d-flex flex-column gap-4">
                                    <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Started for Free</a>
                                    <button onClick={() => scroll('#about')} className="py-md-3 px-md-5 animated slideInRight bg-transparent border-0 text-white d-flex flex-column justify-content-center align-items-center" style={{ fontSize: 26, fontWeight: 600 }}>
                                        <span>Learn More About Akukom</span>
                                        <RxDoubleArrowDown size={32} color='#fff' />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HeroComponent