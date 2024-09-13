import { Children } from "react"
import { articles } from "@/data/articles"
import { Link } from "react-router-dom"

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

                                {Children.toArray(articles.map(article => <div className="col-sm-6 col-md-4">
                                    <div className="thumbnail">
                                        <h2>trending post <span>{article.date}</span></h2>
                                        <div className="thumbnail-img">
                                            <img src={article.image} alt="blog-img" />
                                            <div className="thumbnail-img-overlay"></div>

                                        </div>

                                        <div className="caption">
                                            <div className="blog-txt">
                                                <h3>
                                                    <Link to={`/article/${article.slug}`}>
                                                        {article.title}
                                                    </Link>
                                                </h3>
                                                <p>
                                                    {article.desc[0]}
                                                </p>
                                                <Link to={`/article/${article.slug}`}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default BlogSectionComponent