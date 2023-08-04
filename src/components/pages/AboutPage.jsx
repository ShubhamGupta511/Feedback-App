import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>Feedback-App</h1>
      <p>Hi,This is the feedback-app design to take the Feedback from the Everybody</p>
      <p>
        <Link to='/'>Go to Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
