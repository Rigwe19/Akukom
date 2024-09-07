import OwlCarousel from 'react-owl-carousel';
const TestimonyComponent = () => {
    return (
        <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
            <div className="container">
                <OwlCarousel className="owl-theme py-5" responsive={{
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    }
                }} loop margin={10} dots={false} autoplay nav navElement='button'
                    navClass={['bg-transparent border-0 text-primary display-3', 'bg-transparent border-0 text-primary display-3']}
                    navContainerClass='w-100 d-flex justify-content-between position-absolute top-0 bottom-0 align-items-center'>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden px-2 py-5">
                        <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                        <div className="d-flex align-items-center px-4">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{ width: 45, height: 45 }} />
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 top-0 me-4 mb-n1"></i>
                    </div>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden px-2 py-5">
                        <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                        <div className="d-flex align-items-center px-4">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{ width: 45, height: 45 }} />
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 top-0 me-4 mb-n1"></i>
                    </div>
                    <div className="testimonial-item position-relative bg-white rounded overflow-hidden px-2 py-5">
                        <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                        <div className="d-flex align-items-center px-4">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{ width: 45, height: 45 }} />
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                        <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 top-0 me-4 mb-n1"></i>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default TestimonyComponent