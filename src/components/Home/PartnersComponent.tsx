const PartnersComponent = () => {
    return (
        <section id="partners" className="container-xxl py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 wow slideInLeft d-flex align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center w-100">
                            <h1 className="mb-4 text-center">Partner with <span className="text-primary text-uppercase">Akukom</span></h1>
                            <div className="">
                                <h6 className="section-title text-center text-primary text-uppercase">Collaborations and Partnerships</h6>
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-7">
                                <p className="mb-4 wow zoomInRight">The Akukom team  is  passionate about preserving stories and creating lasting legacies. We believe in the power of collaboration and welcome partnerships with organizations, schools, and entities that share our mission. By partnering with Akukom, you can:</p>
                                <ol className="list">
                                    <li className="item">
                                        <h4 className="heading">Enhance Educational Programs</h4>
                                        <span>Integrate our platform into school curriculums to teach students the value of storytelling and digital archiving.</span>
                                    </li>
                                    <li className="item">
                                        <h4 className="heading">Strengthen Community Initiatives</h4>
                                        <span>
                                            Work with us to document and preserve the histories of local communities, ensuring their stories are told and remembered.</span>
                                    </li>
                                    <li className="item">
                                        <h4 className="heading">Support Organizational Goals</h4>
                                        <span>
                                            Collaborate on projects that align with your organization's mission, leveraging Akukom's tools to create meaningful content and memories.</span>
                                    </li>
                                </ol>
                            </div>
                            <div className="col-lg-5">
                                <h3 className="mb-5 text-primary">Why Partner with Us?</h3>
                                <ol className="list small-list">
                                    <li className="item">
                                        <h4 className="heading">Shared Vision</h4>
                                        <span>We are committed to preserving family histories and cultural heritage.</span>
                                    </li>
                                    <li className="item">
                                        <h4 className="heading">Innovative Platform</h4>
                                        <span>Our user-friendly app makes it easy to create and share digital stories.
                                        </span>
                                    </li>
                                    <li className="item">
                                        <h4 className="heading">Exclusive Access</h4>
                                        <span>Your stories are accessible only to family members, ensuring privacy and security.
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* {Children.toArray(lists.map(item => <CardComponent item={item} />))} */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersComponent