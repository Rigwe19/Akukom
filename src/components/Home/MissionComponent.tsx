
// type Props = {}

const MissionComponent = () => {
    return (
        <div className="container-xxl py-3">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <img alt="mission" className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="./img/mission.jpg" style={{ marginTop: "25%", height: 360 }} />
                    </div>
                    <div className="col-lg-6 wow slideInRight d-flex align-items-center">
                        <div>
                            <h6 className="section-title text-end text-primary text-uppercase ms-5">Connecting Generations Through Stories</h6>
                            <h1 className="mb-4">Our Brand <span className="text-primary text-uppercase">Mission</span></h1>
                            <p className="mb-4">Our mission is to provide a user-friendly platform that empowers African families to document, share, and preserve their most precious memories. We aim to bridge the gap between generations by creating a digital legacy that captures the essence of family milestones,history, culture, and heritage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionComponent