import React from 'react'
import Header from '../../ui/HeaderSection/Header'
import QuizCTA from "../../ui/CTASection/QuizCTA"
import QuizCards from "../../components/quiz/QuizCards"
import TrainingBanner from '../../components/quiz/TrainingBanner'
function QuizPage() {
  return (
    <div className='font-[Roboto]'>
      <Header/>
      <QuizCTA />
      <QuizCards />
      <TrainingBanner/>
    </div>
  )
}

export default QuizPage