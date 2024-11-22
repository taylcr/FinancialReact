import React from 'react';
import './SentimentCard.css';

const SentimentAnalysis = ({ analysisText }) => {
  return (
    <div className="sentiment-analysis">
      <div className="analysis-header">
        <span>Sentiment Analysis</span>
      </div>
      <div className="analysis-content">
        <textarea
          className="analysis-text"
          value={analysisText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
