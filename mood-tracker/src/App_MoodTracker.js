import { useState } from "react"

const App_MoodTracker = () =>{
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const defaultMoodsArray = ['Wonderful', 'Good', 'Normal', 'Bad', 'Terrible']
    const maxlength = 20
    const defaultMoods = defaultMoodsArray.map( mood =>{
        return (
                <button 
                    key={mood} 
                    value={mood}
                    onClick = {(e) => {
                        setMessage(e.target.value)
                        setError(false)
                        }
                    }
                >
                    {mood}
                </button>
            )
    })


    return (
        <div className='mood-tracker'>
            <h1>How do you feel today?</h1>
            {defaultMoods}
            <textarea className={error?'toolong':''}
                value = {message}
                placeholder='How are you today?'
                onChange={(e) => {
                    setMessage(e.target.value)
                    if(message.length > maxlength)
                        setError(true)
                    else
                        setError(false)
                     }
                }
            />
            <p>Message length: {message.length}/ {maxlength}</p>
        </div>
    )
}

export default App_MoodTracker

