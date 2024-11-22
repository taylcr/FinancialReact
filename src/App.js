import React, { useState } from 'react';
import Header from './components/Header/Header';
import MetricsGrid from './components/Metrics/MetricsGrid'
import ChartCard from './components/Chart/ChartCard';
import SentimentCard from './components/Sentiment/SentimentCard';
import FinancialReports from './components/FinancialOptions/FinancialReports';
import ChatWidget from './components/Chat/ChatWidget';
import Chart from 'chart.js/auto';

import './styles/global.css';

const App = () => {
  const [metrics, setMetrics] = useState([
    { value: '4359.01B', label: 'Revenue', change: 'Positive', icon: 'fas fa-chart-line', bgColor: '#ebf5ff', color: '#3b82f6' },
    { value: '78%', label: 'Market Sentiment', change: 'Strongly Positive', icon: 'fas fa-thumbs-up', bgColor: '#ecfdf5', color: '#10b981' },
    { value: 'Beta: 1.2', label: 'Risk Level', change: 'Moderate', icon: 'fas fa-exclamation-triangle', bgColor: '#fffbeb', color: '#f59e0b' },
  ]);

  const sentiments = [
    { label: 'Positive', percentage: 78, color: '#10b981' },
    { label: 'Neutral', percentage: 15, color: '#6b7280' },
    { label: 'Negative', percentage: 7, color: '#ef4444' },
  ];

  const handleSearch = (term) => {
    console.log('Search for:', term);
  };

  const handleRetrieveReport = () => {
    console.log('Retrieve SEC report');
  };

  return (
    <div className="dashboard">
      <Header onSearch={handleSearch} />
      <MetricsGrid metrics={metrics} />
      
      <ChartCard
        data={{
          labels: ['Jan', 'Feb', 'Mar'],
          datasets: [{ data: [100, 200, 300], borderColor: '#3b82f6', backgroundColor: '#ebf5ff' }],
        }}
      />
      <SentimentCard sentiments={sentiments} />
      <FinancialReports
        years={[2024, 2023, 2022]}
        documents={['10-K', '10-Q']}
        onRetrieve={handleRetrieveReport}
      />
      <ChatWidget onSendMessage={(message) => console.log('Chat message:', message)} />
    </div>
  );
};

export default App;
