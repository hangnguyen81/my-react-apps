import {useState, useEffect} from 'react'

function App() {
  const initialTime = 5
  const [userTyping, setUserTyping] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(initialTime)
  const [isGameStart, setIsGameStart] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [isButtonActive, setIsButtonActive] = useState(true)
  const [isTextareaActive, setIsTextareaActive] = useState(false)

  const handleChange = (e) => setUserTyping(e.target.value)

  const calcWordCount = (s) =>{
    let str = s.trim()
    str = str.replace(/[ ]{2,}/gi," ") //reduce multiple spaces to a single space
    str = str.split(' ')
    return str.filter(w => w !== '').length
  }

  const startGame = () =>{
    setIsGameStart(true)
    setIsTextareaActive(true)
    setTimeRemaining(initialTime)
    setUserTyping('')
    setIsButtonActive(false)
  }

  const endGame = () =>{
    setIsGameStart(false)
    setWordCount(calcWordCount(userTyping))
    setIsButtonActive(true)
    setIsTextareaActive(false)
  }

  useEffect(() =>{
    if ( isGameStart && timeRemaining !== 0){
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000);
    }
    else if (timeRemaining === 0){
      endGame()
    }      
  },[timeRemaining,isGameStart])


  return (
    <div className="container">
        <h1>Speed typing game</h1>
        <textarea 
          value = {userTyping}
          onChange = {handleChange}
          disabled = {!isTextareaActive}
          placeholder='Your typing place' />
        <h4>Time remaining:{timeRemaining}</h4>
        <button onClick={startGame} disabled={!isButtonActive}>Start</button>
        <h1>Words count:{timeRemaining ===0?wordCount:''}</h1>      
    </div>
  );
}

export default App;
