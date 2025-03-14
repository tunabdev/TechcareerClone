import React from 'react'
import Header from '../../ui/HeaderSection/Header'
import QuizCTA from "../../ui/CTASection/QuizCTA"
import QuizCards from "../../components/quiz/QuizCards"
import TrainingBanner from '../../components/quiz/TrainingBanner'
import Accordion from '../../components/Accordion'
import Footer from "../../ui/Footer/Footer"
function QuizPage() {
  return (
    <div className='font-[Roboto]'>
      <Header/>
      <QuizCTA />
      <QuizCards />
      <TrainingBanner/>
      <Accordion />
      <Footer />
    </div>
  )
}

export default QuizPage