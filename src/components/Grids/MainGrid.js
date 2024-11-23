import React from 'react'
import ChartCard from '../Chart/ChartCard'; // Correct relative path
import SentimentCard from '../Sentiment/SentimentCard'; // Correct relative path
import './MainGrid.css'

function MainGrid() {
  return (
    <div>
      
      <div className ="main-grid">
        <ChartCard
        data={{
          labels: ['Jan', 'Feb', 'Mar'],
          datasets: [{ data: [100, 200, 300], borderColor: '#3b82f6', backgroundColor: '#ebf5ff' }],
        }}
      />
        {/* <SentimentCard sentiments={sentiments} /> */}

        <SentimentCard  />

        

      </div>

    </div>
  )
}

export default MainGrid
