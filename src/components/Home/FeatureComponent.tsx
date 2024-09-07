import { Children } from "react"

const features = [
    {
        title: 'Customizable Templates',
        desc: 'Create unique stories with our variety of templates.',
        icon: './img/icons/template.png'
    }, {
        title: 'Interactive Timelines',
        desc: 'Visualize your family history through engaging timelines.',
        icon: './img/icons/timeline.png'
    }, {
        title: 'Secure Sharing',
        desc: 'Share memories exclusively with family members.',
        icon: './img/icons/secure.png'
    }, {
        title: 'Multimedia Integration',
        desc: 'Enhance stories with photos, videos, and audio recordings.',
        icon: './img/icons/multimedia.png'
    }, {
        title: 'User-Friendly Interface',
        desc: 'Enjoy a seamless and intuitive experience.',
        icon: './img/icons/user-friendly.png'
    }, {
        title: 'AI aided',
        desc: 'AI tools to help you with visual representation of your stories.',
        icon: './img/icons/ai.png'
    }
]
const FeatureComponent = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
                </div>
                <div className="row g-4">
                    {Children.toArray(features.map(feature => <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded">
                            <div className="service-icon bg-white border p-1">
                                <div className="w-100 h-100 border d-flex align-items-center justify-content-center">
                                    {/* <i className="fa fa-hotel fa-2x text-primary"></i> */}
                                    <img className="w-75" src={feature.icon} alt={feature.title} />
                                </div>
                            </div>
                            <h5 className="mb-3">{feature.title}</h5>
                            <p className="text-body mb-0">{feature.desc}</p>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default FeatureComponent