// import {  } from 'iconsax-react'
type Props = {
    item: {
        title: string;
        image: string;
        desc: string;
    }
}

const CardComponent = ({ item }: Props) => {
    return (
        <div className="card shadow wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item rounded overflow-hidden">
                <div className="position-relative">
                    <img className="img-fluid" src={item.image} alt={item.title} />
                    {/* <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small> */}
                </div>
                <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{item.title}</h5>
                    </div>
                    <p className="text-body mb-3">{item.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CardComponent