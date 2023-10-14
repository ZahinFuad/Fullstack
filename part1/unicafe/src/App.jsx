/* eslint-disable react/prop-types */
import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  if (good > 0 || neutral > 0 || bad > 0)
  {
  return(
    <div>
      <table>
        <tbody>
          <tr><td><StatisticLine text="good" value={good} /></td></tr>
          <tr><td><StatisticLine text="neutral" value={neutral} /></td></tr>
          <tr><td><StatisticLine text="bad" value={bad} /></td></tr>
          <tr><td><StatisticLine text="all" value={good + neutral + bad} /></td></tr>
          <tr><td><StatisticLine text="average" value={(good*1 + neutral*0 + bad*-1)/(good+neutral+bad)} /></td></tr>
          <tr><td><StatisticLine text="postitive" value={(good/(good+neutral+bad))*100 + "%"} /></td></tr>
        </tbody>
      </table>
    </div>
  )
  }
  else {
    return "No feedback given"
  }
}

const Button = ({ handleClick, text }) => {
  return(
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App