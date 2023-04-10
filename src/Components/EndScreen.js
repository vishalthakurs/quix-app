import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank'

const EndScreen = () => {
    const {gameState,setGameState,score,setScore}=useContext(QuizContext);
    const restartQuiz=()=>{
        setGameState('menu');
        setScore(0);
    }
  return (
    <div className='end-screen'>
      <h1> Your Final Score is : {score}/{Questions.length}</h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen
