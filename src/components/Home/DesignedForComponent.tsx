import { Children } from 'react'
import CardComponent from '../CardComponent'

const lists = [{
    title: "The Family Historian",
    image: "/img/historian.jpg",
    desc: "For those passionate about tracing and preserving their family's heritage."
}, {
    title: "The Busy Parent",
    image: "/img/busy-parents.jpg",
    desc: "For parents who want to document every milestone amidst their hectic schedules."
}, {
    title: "The Tech-Savvy Millennial",
    image: "/img/tech.jpg",
    desc: "For digital natives seeking innovative ways to share and relive family moments."
}, {
    title: "The Aging Grandparent",
    image: "/img/grandparents.jpg",
    desc: "For elders who wish to leave a legacy for future generations."
}, {
    title: "The New Family",
    image: "/img/new-family.jpg",
    desc: "For young families eager to capture and cherish their journey from the very beginning."
}, {
    title: "The Not-so-tech Savvy",
    image: "/img/non-tech.jpg",
    desc: "perfect for everyone who values preserving their heritage but prefers a less technical and user-friendly experience."
},]
const DesignedForComponent = () => {
    return (
        <section id='designed-for' className="container-xxl py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 wow slideInLeft d-flex align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center w-100">
                            <h1 className="mb-4 text-center">Who We Designed Akukom <span className="text-primary text-uppercase">For</span></h1>
                            <div className="">
                                <h6 className="section-title text-center text-primary text-uppercase">Everyone Who Cherishes Family Moments</h6>
                            </div>

                            <p className="mb-4 wow zoomInRight">Discover the perfect solution for preserving and sharing your family's story, tailored to your unique needs and preferences. Whether you're a family historian, busy parent, tech-savvy millennial, aging grandparent, new family, or not-so-tech-savvy individual, our platform offers a user-friendly and innovative way to capture, cherish, and pass down your legacy for generations to come.</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="cards">
                            {Children.toArray(lists.map(item => <CardComponent item={item} />))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesignedForComponent