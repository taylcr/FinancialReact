import React from 'react'
import './SentimentBar.css';



const SentimentBar = ({label ,percentage, color }) => {
  return (
    <div class="sentiment-bar">
      <div class="sentiment-header">
          <span>{label} </span>
          <span>{percentage}%</span>
      </div>
      <div class="progress-bar">
          
           {/* Use dynamic width and color */}
        <div
          className="progress-fill"
          style={{ width: `${percentage}%`, background: color }}
        >
          
        </div>
      </div>
  </div>
  )
}

export default SentimentBar
