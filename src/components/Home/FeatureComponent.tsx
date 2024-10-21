import { Children } from "react"

// const features = [
//     {
//         title: 'Customizable Templates',
//         desc: 'Create unique stories with our variety of templates.',
//         icon: '/img/icons/template.png'
//     }, {
//         title: 'Interactive Timelines',
//         desc: 'Visualize your family history through engaging timelines.',
//         icon: '/img/icons/timeline.png'
//     }, {
//         title: 'Secure Sharing',
//         desc: 'Share memories exclusively with family members.',
//         icon: '/img/icons/secure.png'
//     }, {
//         title: 'Multimedia Integration',
//         desc: 'Enhance stories with photos, videos, and audio recordings.',
//         icon: '/img/icons/multimedia.png'
//     }, {
//         title: 'User-Friendly Interface',
//         desc: 'Enjoy a seamless and intuitive experience.',
//         icon: '/img/icons/user-friendly.png'
//     }, {
//         title: 'AI aided',
//         desc: 'AI tools to help you with visual representation of your stories.',
//         icon: '/img/icons/ai.png'
//     }
// ]
const features = [
    {
        title: 'AI-Powered Story Creation',
        desc: 'Leverage AI for voice recognition and natural language processing to transcribe oral histories',
        icon: '/img/icons/ai.png'
    }, {
        title: 'Collaborative Family Tree',
        desc: 'Allow multiple family members to contribute and enrich stories collectively',
        icon: '/img/icons/collaboration.png'
    }, {
        title: 'Personalized Profile Pages',
        desc: 'Your personalized space for family stories and heritage',
        icon: '/img/icons/personalized.png'
    }, {
        title: 'Memory Quiz Game',
        desc: 'Use the memory quiz game to unlock your family‘s past, one question at a time',
        icon: '/img/icons/quiz.png'
    }, {
        title: 'Customizable Templates for Storytelling',
        desc: 'Offer templates tailored to various African cultural practices and storytelling formats',
        icon: '/img/icons/template.png'
    },
]
const FeatureComponent = () => {
    return (
        <section id="service" className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Digital Storytelling at Its Best</h6>
                    <h1 className="mb-5">Features of the Akukom <span className="text-primary text-uppercase">App</span></h1>
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
        </section>
    )
}

export default FeatureComponent