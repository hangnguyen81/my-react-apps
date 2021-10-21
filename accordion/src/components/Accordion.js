import {useState} from 'react'
import questions from '../data'

function AccordionItem({ data }) { 
    const [showInfo, setShowInfo] = useState(false) 
    
    const icon = !showInfo ?
            <span className="icon"><i class="ri-add-circle-line" onClick={() => setShowInfo(!showInfo)}></i></span>
            :
            <span className="icon"><i class="ri-indeterminate-circle-line" onClick={() => setShowInfo(!showInfo)}></i> </span>
    
            return (
     <div className="accordion-question">
         <div className='question-title'>
            <h3>{data.title}</h3>
            {icon}
         </div> 
         {showInfo && <p className='question-info'>{data.info}</p>}       
         
     </div>
    )
  }

  const listOfQuestion = questions.map(question =><AccordionItem key={question.id} data={question}/>)

function Accordion(){ 
    return(
        <div className='accordion-content'>
            {listOfQuestion}
        </div>
    
    )
}

export default Accordion