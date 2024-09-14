import './Pricing.css'
const PricingComponent = () => {
    return (
        <section id='plans' className="container-xxl py-5 bg-dark">
            <div className="container py-5">
                {/* <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase"> Plan</h6>
                    <h1 className="mb-5">Perfect Pricing Plan</h1>
                </div> */}
                <div className="w-100 d-flex flex-column align-items-center">
                    <h1 className="mb-4 text-center text-white">Our Pricing <span className="text-primary text-uppercase">Plan</span></h1>
                    <div className="mb-3">
                        <h6 className="section-title text-center text-primary text-uppercase">Perfect Pricing Plan</h6>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-primary mb-1">Free Plan</h5>
                                <h1 className="display-5 mb-0">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>0.00<small
                                        className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                                </h1>
                            </div>
                            <div className="p-4 pt-0">
                                <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                                <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                                <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                                <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                                <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                                <a className="btn-slide mt-2 d-flex" href=""><i className="fa fa-arrow-right"></i><span >Order Now</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-primary mb-1">Silver Plan</h5>
                                <h1 className="display-5 mb-0">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>99.00<small
                                        className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                                </h1>
                            </div>
                            <div className="p-4 pt-0">
                                <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                                <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                                <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                                <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                                <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                                <a className="btn-slide mt-2 d-flex" href=""><i className="fa fa-arrow-right"></i><span >Order Now</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-primary mb-1">Platinum Plan</h5>
                                <h1 className="display-5 mb-0">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>149.00<small
                                        className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                                </h1>
                            </div>
                            <div className="p-4 pt-0">
                                <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                                <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                                <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                                <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                                <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                                <a className="btn-slide mt-2 d-flex" href=""><i className="fa fa-arrow-right"></i><span >Order Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingComponent