import { PiTelegramLogoDuotone } from "react-icons/pi"

const JoinTelegram = () => {
    return (
        <section id="community" className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-md-6 bg-dark d-flex align-items-center">
                    <div className="p-5">
                        <h6 className="section-title text-start text-white text-uppercase mb-3">Be Part of a Global Family Network</h6>
                        <h1 className="text-white mb-4">Join Our Community</h1>
                        <p className="text-white mb-4">Join our growing network of families who are dedicated to preserving their heritage and connecting with loved ones. Share your stories, learn from others, and be inspired by the richness of family histories from around Africa</p>
                        <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 align-items-center">
                            <PiTelegramLogoDuotone className="me-1" />
                            Our Telegram Channel
                        </a>
                        {/* <a href="" className="btn btn-light py-md-3 px-md-5">Book A Room</a> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="video">
                        {/* <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinTelegram