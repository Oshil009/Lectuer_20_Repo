import React from 'react'
import Counter from './components/Counter'
import Stats from './components/Stats'
import History from './components/History'

const App = () => {
  return (
    <div>
      <h1>Redux Global State Demo</h1>
      <Counter/>
      <Stats/>
      <History/>
    </div>
  )
}

export default App