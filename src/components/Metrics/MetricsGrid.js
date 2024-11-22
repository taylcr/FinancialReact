import React from 'react';
import MetricCard from './MetricCard';
import './MetricsGrid.css';

const MetricsGrid = ({ metrics }) => {
  return (
    <div className="metrics-grid">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          value={metric.value}
          label={metric.label}
          change={metric.change}
          icon={metric.icon}
          bgColor={metric.bgColor}
          color={metric.color}
        />
      ))}
    </div>
  );
};

export default MetricsGrid;
