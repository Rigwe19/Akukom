import { Children } from 'react'
import Accordion from '../Accordion'
const items = [{
    question: '1.   What is Akukom?',
    answer: 'Akukom is a digital platform designed to help you preserve and share your family history through stories, photos, and videos. It provides a secure and organized space to document and relive cherished memories.'
}, {
    question: '2.   How do I sign up for Akukom?',
    answer: 'Signing up for Akukom is easy! Visit our website at akuko.io, click on "Sign Up," and follow the prompts to create your account. You can also sign up through our mobile app available on both iOS and Android.'
}, {
    question: '3.   Is my family history secure on Akukom?',
    answer: 'Yes, your privacy and security are our top priorities. Akukom uses advanced encryption methods to protect your data and ensures that only you and the people you choose can access your family history.'
}, {
    question: '4.   Can I invite other family members to contribute to our family history?',
    answer: 'Absolutely! Akukom allows you to invite family members to join your account and contribute their own stories, photos, and videos. This collaborative feature helps build a richer, more comprehensive family history.'
}, {
    question: '5.   What types of content can I upload to Akukom?',
    answer: 'You can upload a variety of content, including photos, videos, audio recordings, and written stories. Akukom also offers customizable templates and interactive tools to enhance your storytelling experience'
}]
const FAQs = () => {
    // const [items, setItems] = useState(initialItems);
    // const handleClick = (index: number, value: boolean) => {
    //     const defaultItems = [...items];
    //     const newItems = defaultItems.map((val, idx) => {
    //         return idx === index ? { ...val, active: value } : { ...val, active: false }
    //     })
    //     setItems(newItems)
    // }
    return (
        <section id='faqs' className="container-xxl py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 wow slideInLeft d-flex align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center w-100">
                            <h1 className="mb-4 text-center"><span className="text-primary text-uppercase">FAQs</span></h1>
                            <div className="">
                                <h6 className="section-title text-center text-primary text-uppercase">Got Questions? We’ve Got Answers</h6>
                            </div>
                        </div>
                    </div>
                    <div id="faq-accordion" className="col-lg-8 offset-lg-2">
                        {Children.toArray(items.map((item, index) => <Accordion item={item} index={index} />))}
                    </div>
                </div>
            </div>
        </section>)
}

export default FAQs