import {FaChevronLeft, FaChevronRight,FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


function capitalizeString(s){     
    return s.split(' ').map(item =>item[0].toUpperCase() + item.slice(1)).join(' ')   
}
export default function ReviewCard({review, next, prev, randomReview}){
    return(
        <div className='row'>
        <div className="col-sm-6 mx-auto">
        <div className="card my-2 text-center">
            <img src={review.image} className="mx-auto mt-3 rounded-circle" width="20%" alt="ava of reviewer"/>
            <div className="card-body mx-auto mt-2">
                <h5 className="card-title">{capitalizeString(review.name)}</h5>
                <p className="text-primary">{review.job.toUpperCase()}</p>
                <div className='d-flex mt-1'>
                    <FaQuoteLeft className="mx-1 text-primary"/>
                    <p className="card-text">{review.text}</p>
                    <FaQuoteRight className="mx-1 text-primary"/>  
                </div>             
            </div>
            <div className='d-flex justify-content-center mt-0'>
                    <FaChevronLeft className="mx-3" onClick={next}/>
                    <FaChevronRight className="mx-3" onClick={prev}/>
            </div>
            <button className="btn btn-primary mx-auto my-2" onClick={randomReview}>Surpire me</button>
        </div>
        </div>
        </div>
    )
}