
type Props = {
  item: {
    question: string;
    answer: string;
  },
  index: number
}

const Accordion = ({ item, index }: Props) => {
  // const contentRef = useRef<HTMLDivElement>(null)
  // useEffect(() => {
  //   if (contentRef.current) {
  //     contentRef.current.style.maxHeight = item.active
  //       ? `${contentRef.current?.scrollHeight}px`
  //       : "0px"
  //   }
  // }, [item.active]);
  // const toggleAccordion = () => {
  //   onClick(!item.active)
  // }
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${index}`}>
        <button className="accordion-button collapsed" type='button' data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>{item.question}</button>
      </h2>
      <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faq-accordion">
        <div className="accordion-body bg-white">
          {item.answer}
        </div>
      </div>
    </div>
  )
}

export default Accordion
{/* <button className='accordion-button' onClick={toggleAccordion}>
      <div className='overflow-hidden'>
        <div className="justify-content-between align-items-center d-flex">
          <h4>{item.question}</h4>
          <Add variant="Broken" />
        </div>
        <div ref={contentRef}>{item.answer}</div>
      </div>
    </button> */}