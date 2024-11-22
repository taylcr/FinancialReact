import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './ChartCard.css';

const ChartCard = ({ data }) => {
  const chartRef = useRef(null); // Reference to the canvas element
  const chartInstance = useRef(null); // Reference to the Chart.js instance

  useEffect(() => {
    // Destroy existing chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); // Recreate the chart whenever `data` changes

  return (
    <div className="chart-card">
      <canvas id="stockChart" ref={chartRef}></canvas>
    </div>
  );
};

export default ChartCard;
