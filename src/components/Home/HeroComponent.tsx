import './hero.css'
// type Props = {}

const HeroComponent = () => {
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
                                <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Started</a>
                                {/* <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="/img/carousel-2.jpg" alt="carousel" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: 700 }}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Connecting Families Through The</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Power Of Storytelling</h1>
                                <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Started</a>
                                {/* <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a> */}
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