import { useState, useEffect, useRef } from "react";

function TypeGame(initialTime = 5){
    const [userTyping, setUserTyping] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(initialTime)
    const [isGameStart, setIsGameStart] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const [isButtonActive, setIsButtonActive] = useState(true)
    const [isTextareaActive, setIsTextareaActive] = useState(false)
    const textareaRef = useRef(null)

    const handleChange = (e) => setUserTyping(e.target.value)

    const calcWordCount = (s) =>{
        let str = s.trim()
        str = str.replace(/[ ]{2,}/gi," ") 
        str = str.split(' ')
        return str.filter(w => w !== '').length
    }

    const startGame = () =>{
        setIsGameStart(true)
        setIsTextareaActive(true)
        setTimeRemaining(initialTime)
        setUserTyping('')
        setIsButtonActive(false)
        textareaRef.current.disabled = false
        textareaRef.current.focus()
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

    return {textareaRef, userTyping, handleChange, isTextareaActive, timeRemaining, startGame, isButtonActive, wordCount}
}

export default TypeGame