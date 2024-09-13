import NavBarComponent from '@/components/Home/NavBarComponent'
import './Article.css'
import { Link, useParams } from 'react-router-dom'
import { Children, useEffect, useState } from 'react'
import { articles } from '@/data/articles'
import Footer from '@/components/Home/Footer'

type ArticleProps = {
    title: string;
    desc: (string | string[])[];
    image: string;
    slug: string;
    date: string;
    tags: string[]
}

const Article = () => {
    const { slug } = useParams<{ slug: string }>()
    const [post, setPost] = useState<ArticleProps>({
        title: "",
        desc: [],
        image: "",
        slug: "",
        date: "",
        tags: []
    });
    const [index, setIndex] = useState<number[]>([]);
    useEffect(() => {
        const getPost = articles.findIndex(val => val.slug === slug)

        if (getPost) {
            setPost(articles[getPost])
            const arr = [0, 1, 2];
            arr.splice(arr.indexOf(getPost), 1);
            setIndex(arr)
        }
    }, []);
    useEffect(() => {
        const getPost = articles.findIndex(val => val.slug === slug)
        if (getPost !== -1) {
            setPost(articles[getPost])
            const arr = [0, 1, 2];
            arr.splice(arr.indexOf(getPost), 1);
            setIndex(arr)
        }
    }, [slug]);
    console.log(slug)
    return (
        <>
            <NavBarComponent />
            <div className="site-content">
                <div className="container">
                    <div className="main-content">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="sidebar">
                                    <div className="sidebar-section">
                                        <h5><span>Newsletter</span></h5>
                                        <link href="https://cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                                        <div id="mc_embed_signup">
                                            <form action="https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&amp;id=8c3d2d214b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                                <div id="mc_embed_signup_scroll">
                                                    <h2>Sign up to get our weekly free guide to selling digital downloads</h2>
                                                    <div className="mc-field-group">
                                                        <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="E-mail Address" />
                                                    </div>
                                                    <div id="mce-responses" className="clear">
                                                        <div className="response" id="mce-error-response" style={{ display: "none" }}>
                                                        </div>
                                                        <div className="response" id="mce-success-response" style={{ display: "none" }}>
                                                        </div>
                                                    </div>
                                                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                                        <input type="text" name="b_8aeb20a530e124561927d3bd8_8c3d2d214b" value="" />
                                                    </div>
                                                    <div className="clear">
                                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <script type='text/javascript' src='https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
                            <script type='text/javascript'>(function($) {window.frames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='MMERGE3';ftypes[3]='text';fnames[1]='MMERGE1';ftypes[1]='text';fnames[2]='MMERGE2';ftypes[2]='text';fnames[4]='MMERGE4';ftypes[4]='text';fnames[5]='MMERGE5';ftypes[5]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
                                    </div>
                                    <div className="sidebar-section">
                                        <h5><span>Useful</span></h5>
                                        <ul style={{ listStyle: "none" }}>
                                            {Children.toArray(articles.map(article => <li><Link to={`/article/${article.slug}`}>{article.title}</Link></li>))}
                                        </ul>
                                    </div>
                                    <div className="sidebar-section">
                                        <h5><span>Recommended</span></h5>
                                        <a href="https://easydigitaldownloads.com/?ref=2135" title="Sell digital downloads with WordPress, for free"><img src="https://easydigitaldownloads.com/wp-content/uploads/2015/02/300x250-2.png" alt="Sell digital downloads with WordPress, for free" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="mainheading">
                                    <div className="after-post-tags">
                                        <ul className="tags">
                                            {Children.toArray(post.tags.map(tag => <li>
                                                <a href="#">{tag}</a>
                                            </li>))}
                                        </ul>
                                    </div>
                                    <h1 className="posttitle">{post.title}</h1>
                                </div>
                                <img className="featured-image img-fluid" src={post.image} alt="" />
                                <div className="article-post">
                                    {Children.toArray(post.desc.map((paragraph, index) => {
                                        if (Array.isArray(paragraph)) {
                                            return <h2 className="text-center">{paragraph}</h2>
                                        }
                                        if (paragraph.charAt(paragraph.length - 1) === ':') {
                                            return <h5>{paragraph}</h5>
                                        }
                                        if (post.desc.length - 2 === index) {
                                            return (<blockquote>
                                                <p>
                                                    {paragraph}
                                                </p>
                                            </blockquote>)
                                        }
                                        return (<p>
                                            {paragraph}
                                        </p>)
                                    }))}

                                    <div className="clearfix">
                                    </div>
                                </div>
                                <p>
                                    <small>
                                        <span className="post-date"><time className="post-date" dateTime="2018-01-12">{post.date}</time></span>
                                    </small>
                                </p>
                                <div className="row PageNavigation mt-4 prevnextlinks">
                                    <div className="col-md-6 rightborder pl-0">
                                        <Link className="thepostlink" to={`/article/${articles[index[0]]?.slug}`}>« {articles[index[0]]?.title}</Link>
                                    </div>
                                    <div className="col-md-6 text-right pr-0">
                                        <Link className="thepostlink" to={`/article/${articles[index[1]]?.slug}`}>{articles[index[1]]?.title} »</Link>
                                    </div>
                                </div>
                                {/* <div className="row post-top-meta">
                                    <div className="col-md-2">
                                        <img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal" />
                                    </div>
                                    <div className="col-md-10">
                                        <a target="_blank" className="link-dark" href="#">Sal</a><a target="_blank" href="https://twitter.com/wowthemesnet" className="btn follow">Follow</a>
                                        <span className="author-description">Author of Affiliates, a template available for WordPress, HTML, Ghost and Jekyll. You are currently previewing Jekyll template demo.</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="beforefooter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h3>This is your final call to action area. Shine like a star, make them want you, tell 'em to push that button!</h3>
                                <p>
                                    We offer a <span>30 Day Money Back Guarantee</span>, so joining is Risk-Free!
                                </p>
                                <a className="btn btn-primary btn-lg" href="#">Join us yesterday</a>
                            </div>
                            <div className="col-md-4 text-right footersocial">
                                <h5 className="footer-social-h5">Connect with Us</h5>
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-google"></i>
                                <i className="fa fa-pinterest"></i>
                                <i className="fa fa-github"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Article