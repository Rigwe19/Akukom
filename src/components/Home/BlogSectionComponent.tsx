
const BlogSectionComponent = () => {
    return (
        <section id="blog" className="blog">
            <div className="container">
                <div className="blog-details">
                    <div className="d-flex flex-column justify-content-center align-items-center w-100">
                        <h1 className="mb-4 text-center">Our <span className="text-primary text-uppercase">Blog</span></h1>
                        <div className="">
                            <h6 className="section-title text-center text-primary text-uppercase">Insights and Stories</h6>
                        </div>
                        <div className="blog-content">
                            <div className="row">

                                <div className="col-sm-4 col-md-4">
                                    <div className="thumbnail">
                                        <h2>trending news <span>15 november 2017</span></h2>
                                        <div className="thumbnail-img">
                                            <img src="./img/video.jpg" alt="blog-img" />
                                            <div className="thumbnail-img-overlay"></div>

                                        </div>

                                        <div className="caption">
                                            <div className="blog-txt">
                                                <h3>
                                                    <a href="#">
                                                        Discover on beautiful weather, Fantastic foods and historical place in Prag
                                                    </a>
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                                </p>
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-sm-4 col-md-4">
                                    <div className="thumbnail">
                                        <h2>trending news <span>15 november 2017</span></h2>
                                        <div className="thumbnail-img">
                                            <img src="./img/video.jpg" alt="blog-img" />
                                            <div className="thumbnail-img-overlay"></div>

                                        </div>
                                        <div className="caption">
                                            <div className="blog-txt">
                                                <h3>
                                                    <a href="#">
                                                        Discover on beautiful weather, Fantastic foods and historical place in india
                                                    </a>
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                                </p>
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-sm-4 col-md-4">
                                    <div className="thumbnail">
                                        <h2>trending news <span>15 november 2017</span></h2>
                                        <div className="thumbnail-img">
                                            <img src="./img/video.jpg" alt="blog-img" />
                                            <div className="thumbnail-img-overlay"></div>

                                        </div>
                                        <div className="caption">
                                            <div className="blog-txt">
                                                <h3><a href="#">10 Most Natural place to Discover</a></h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                                </p>
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default BlogSectionComponent