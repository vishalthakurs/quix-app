import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import '../App.css'

const MainMenu = () => {
    const {gamestate, setGameState}=useContext(QuizContext);
  return (
    <div className='menu'>
      <button onClick={()=>setGameState('quiz')}>StartQuiz</button>
    </div>
  )
}

export default MainMenu
