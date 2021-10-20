// review apps
import ReviewsHeader from './components/ReviewsHeader';
import ReviewCard from './components/ReviewsCard';
import ReviewsFooter from './components/ReviewsFooter';
import reviews from './reviewsData';
import {useState} from 'react';


function App(){
    const [currentReview, setCurrentReview] = useState(0);  
    
    const handleNext = () =>{
        if (currentReview === reviews.length -1)
            setCurrentReview(0);
        else
            setCurrentReview(currentReview + 1);
    }

    const handlePrev = () =>{
        if (currentReview === 0)
            setCurrentReview(reviews.length-1);
        else
            setCurrentReview(currentReview - 1);
    }

    const handleRandomReview = () => {
        const ranNum = Math.floor(Math.random()*reviews.length);
        setCurrentReview(ranNum);
    }

    return(
        <section className="bg-secondary min-vh-100">
            <div className="container-md">
                <ReviewsHeader/>
                <ReviewCard 
                    review={reviews[currentReview]} 
                    next={handleNext} 
                    prev={handlePrev} 
                    randomReview={handleRandomReview}
                />
                <ReviewsFooter/>
            </div>
        </section>
    )
}

export default App