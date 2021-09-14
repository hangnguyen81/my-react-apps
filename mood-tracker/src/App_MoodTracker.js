import { useState } from "react"

const App_MoodTracker = () =>{
    const [message, setMessage] = useState('')
    const defaultMoodsArray = ['Wonderful', 'Good', 'Normal', 'Bad', 'Terrible']
    const maxlength = 20
    const defaultMoods = defaultMoodsArray.map( mood =>{
        return (
                <button 
                    key={mood} 
                    value={mood}
                    onClick = {(e) => setMessage(e.target.value)}
                >
                    {mood}
                </button>
            )
    })
    return (
        <div className='mood-tracker'>
            <h1>How do you feel today?</h1>
            {defaultMoods}
            <textarea className={message.length > maxlength? 'toolong':''}
                value = {message}
                placeholder='How are you today?'
                onChange={(e) => setMessage(e.target.value)}
            />
            <p>Message length: {message.length}/ {maxlength}</p>
        </div>
    )
}

export default App_MoodTracker

