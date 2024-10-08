import { DocumentText1, DocumentUpload, SecuritySafe, Share, UserAdd } from "iconsax-react"
import { Children } from "react"
// #ff8a65
const lists = [
    {
        title: 'Create an Account',
        desc: 'Sign up and set up your family tree.',
        icon: <UserAdd variant="Broken" color="#ffffff" size={64} />
    }, {
        title: 'Document Memories',
        desc: 'Use our customizable templates to document stories, events, and milestones.',
        icon: <DocumentText1 variant="Broken" color="#ffffff" size={64} />
    }, {
        title: 'Upload Media',
        desc: 'Add photos, videos, and audio recordings to enrich your stories.',
        icon: <DocumentUpload variant="Broken" color="#ffffff" size={64} />
    }, {
        title: 'Share with Family',
        desc: 'Invite family members to join, contribute, and relive memories together.',
        icon: <Share variant="Broken" color="#ffffff" size={64} />
    }, {
        title: 'Preserve and Access',
        desc: 'Your memories are securely stored and easily accessible on any device.',
        icon: <SecuritySafe variant="Broken" color="#ffffff" size={64} />
    }
]
const HowWorks = () => {
    return (
        <section id="works" className="container-xxl py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 wow slideInLeft d-flex align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center w-100">
                            <h1 className="mb-4 text-center">How the Platform <span className="text-primary text-uppercase">Works</span></h1>
                            <div className="">
                                <h6 className="section-title text-center text-primary text-uppercase">Simple, Intuitive, and Engaging</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        {Children.toArray(lists.map((item, index) => <div className="bg-primary shadow-sm p-3 mb-3 rounded-3 d-flex gap-4 wow slideInLeft" data-wow-delay={index + 1}>
                            {item.icon}
                            <div>
                                <h5 className="text-white">{item.title}</h5>
                                <span className="small text-white">{item.desc}</span>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWorks