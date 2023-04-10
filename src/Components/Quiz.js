import React, { useContext, useState } from 'react'
import {Questions} from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contexts';

const Quiz = () => {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [optionChose,setOptionChose]=useState('')
    const {score,setScore,gameState,setGameState}=useContext(QuizContext);
    const nextQuestion=()=>{
        if(Questions[currentQuestion].Answer===optionChose)
        {
            setScore(score+1);
        }
        setCurrentQuestion(currentQuestion+1);
    }
    const finishQuiz=()=>{
        if(Questions[currentQuestion].Answer===optionChose)
        {
            setScore(score+1);
        }
        setGameState('end');
    }

  return (
    <div className='quiz'>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={()=>setOptionChose('A')}>{Questions[currentQuestion].OptionA}</button>
        <button onClick={()=>setOptionChose('B')}>{Questions[currentQuestion].OptionB}</button>
        <button onClick={()=>setOptionChose('C')}>{Questions[currentQuestion].OptionC}</button>
        <button onClick={()=>setOptionChose('D')}>{Questions[currentQuestion].OptionD}</button>
      </div>
      {currentQuestion==Questions.length-1?(<button onClick={finishQuiz} className='finish-btn'>FinishQuiz</button>):(<button onClick={nextQuestion} className='finish-btn'>Next Question</button>)}
      
    </div>
  )
}

export default Quiz
