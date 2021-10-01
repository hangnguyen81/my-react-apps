
import TypeGame from './typeGame_hooks'

function App() {
  const {
    textareaRef, 
    userTyping,
    handleChange, 
    isTextareaActive, 
    timeRemaining, 
    startGame, 
    isButtonActive, 
    wordCount
  }   = TypeGame(10)

  return (
    <div className="container">
        <h1>Speed typing game</h1>
        <textarea 
          ref = {textareaRef}
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
