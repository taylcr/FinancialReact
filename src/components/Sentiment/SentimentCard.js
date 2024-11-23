import React from 'react';
import './SentimentCard.css';
import SentimentAnalysis from './SentimentAnalysis';
import SentimentBar from './SentimentBar';

const analysisText = `
Based on current market analysis, the company shows strong positive sentiment (78%) driven by robust 
quarterly earnings, product innovation, and market expansion. Neutral sentiment (15%) reflects some 
concerns about supply chain challenges, while negative sentiment (7%) primarily stems from broader 
market uncertainties.
`;
const sentiments = [
  { label: 'Positive', percentage: 78, color: '#10b981' },
  { label: 'Neutral', percentage: 15, color: '#6b7280' },
  { label: 'Negative', percentage: 7, color: '#ef4444' },
];

const SentimentCard = () => {
  return (
    <div className="sentiment-card">
      <h3>Public Sentiment</h3>
      
      {/* Dynamically render SentimentBars */}
      {sentiments.map((sentiment, index) => (
        <SentimentBar
          key={index} // Use a unique key for each item
          label={sentiment.label}
          percentage={sentiment.percentage}
          color={sentiment.color}
        />
      ))}


      <SentimentAnalysis analysisText ={analysisText}/>
      
    </div>
  );
};

export default SentimentCard;
