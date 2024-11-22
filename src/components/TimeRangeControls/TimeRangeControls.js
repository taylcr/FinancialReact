import React from 'react';
import './TimeRangeControls.css';

const TimeRangeControls = ({ selectedRange, onRangeChange }) => {
  const ranges = ['1W', '1M', '1Y', '5Y', 'ALL'];

  return (
    <div className="time-range-controls">
      <div className="btn-group">
        {ranges.map((range) => (
          <button
            key={range}
            className={`time-btn ${selectedRange === range ? 'active' : ''}`}
            onClick={() => onRangeChange(range)}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeRangeControls;
