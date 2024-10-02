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

                <div className="g-5 pricing-grid">
                    <div className="wow fadeInUp d-grid pb-4 price-item" data-wow-delay="0.3s">
                        <div className="">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-primary mb-1">Heritage Starter</h5>
                                <h1 className="display-5 mb-0">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>₦</small>0.00<small
                                        className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                                </h1>
                            </div>

                            <div className="p-4 pt-0 ">
                                <p className="text-sm"><i className="fa fa-check text-success text-sm me-3"></i>Access to basic features for documenting and sharing family stories.</p>
                                <p className="text-sm"><i className="fa fa-check text-success text-sm me-3"></i>Create up to 2 digital family stories with text and images.</p>
                                <p className="text-sm"><i className="fa fa-check text-success text-sm me-3"></i>Limited storage.</p>
                                <p className="text-sm"><i className="fa fa-check text-success text-sm me-3"></i>Basic AI transcription for audio recordings (up to 30 minutes/month).</p>
                                <p className="text-sm"><i className="fa fa-check text-success text-sm me-3"></i>Basic family tree creation tool (up to 3 generations).</p>
                                <p className="text-sm"><i className="fa fa-check text-success text-sm me-3"></i>Access to 2 public templates for storytelling.</p>
                                <p className="text-sm"><i className="fa fa-check text-success text-sm me-3"></i>Option to purchase exclusive templates for ₦500 each.</p>
                                <p className="text-sm"><i className="fa fa-check text-success text-sm me-3"></i>Community access to forums for sharing stories with family members.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Limited email support.</p>
                            </div>
                        </div>
                        <a className="btn-slide mt-2 ms-4 align-self-end d-flex" href=""><i className="fa fa-arrow-right"></i><span >Get Plan</span></a>
                    </div>
                    <div className="wow fadeInUp price-item pb-4 d-grid" data-wow-delay="0.5s">
                        <div className="">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-primary mb-1">Legacy Builder</h5>
                                <h6 className="display-6 mb-0">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>₦</small>2,000<small
                                        className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                                </h6>
                                <h6 className="display-6 mb-0">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>₦</small>20,000<small
                                        className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Year</small>
                                </h6>
                            </div>

                            <div className="p-4 pt-0 d-flex flex-column">
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Everything in the Heritage Starter plan, plus</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Create unlimited digital family stories with text, images, and videos.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>10 GB of storage for multimedia content.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>AI-powered transcription (up to 5 hours/month) with advanced language support.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Advanced family tree creation (up to 10 generations).</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Access to 5 exclusive storytelling templates.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Purchase additional exclusive templates for ₦500 each.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Add audio narrations to stories (up to 5 hours of audio).</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Collaborate with family members on shared projects.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Cloud backup and multi-device sync.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Priority customer support via email and live chat.</p>
                            </div>
                        </div>
                        <a className="btn-slide mt-2 ms-4 align-self-end d-flex" href=""><i className="fa fa-arrow-right"></i><span >Get Plan</span></a>
                    </div>
                    <div className="wow fadeInUp d-grid pb-4 price-item" data-wow-delay="0.7s">
                        <div className="">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-primary mb-1">Cultural Guardian</h5>
                                <h6 className="display-6 mb-0">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>₦</small>4,500<small
                                        className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                                </h6>
                                <h6 className="display-6 mb-0">
                                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>₦</small>45,000<small
                                        className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Year</small>
                                </h6>
                            </div>
                            <div className="p-4 pt-0">
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Everything in the Legacy Builder plan, plus:</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Unlimited storage for multimedia (photos, videos, audio).</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Unlimited AI-powered transcription with real-time editing.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Advanced family tree tool (unlimited generations) with genealogy import/export options.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Access to 10 exclusive storytelling templates.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Unlimited access to augmented reality (AR) experiences for immersive storytelling.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Create 3D models of family heirlooms and historical items.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Personalized coaching and curation tips for storytelling.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Early access to new features and beta testing for AR/VR experiences.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Invitations to exclusive Akukom events and workshops with cultural heritage experts.</p>
                                <p className="text-sm"><i className="fa fa-check text-success me-3"></i>Premium customer support with dedicated phone and email assistance.</p>
                            </div>
                        </div>
                        <a className="btn-slide mt-2 align-self-end ms-4 d-flex" href=""><i className="fa fa-arrow-right"></i><span >Get Plan</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingComponent