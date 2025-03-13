import React from 'react'
import Header from '../../ui/HeaderSection/Header'
import QuizCTA from "../../ui/CTASection/QuizCTA"
import QuizCards from "../../components/quiz/QuizCards"
function QuizPage() {
  return (
    <div className='font-[Roboto]'>
      <Header/>
      <QuizCTA />
      <QuizCards />
    </div>
  )
}

export default QuizPage