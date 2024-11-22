import React from 'react';
import './MetricCard.css';

const MetricCard = ({ value, label, change, icon, bgColor, iconColor }) => (
    <div className="metric-card">
      <div className="metric-header">
        <div>
          <div className="metric-value">{value}</div>
          <div className="metric-label">{label}</div>
          <div className="metric-change" style={{ color: change > 0 ? "#10b981" : "#ef4444" }}>
            <i className={`fas fa-arrow-${change > 0 ? "up" : "down"}`}></i> {change}%
          </div>
        </div>
        
        <div className="metric-icon" style={{ backgroundColor: bgColor }}>
          <i className={icon} style={{ color: iconColor }}></i>
        </div>
      </div>
    </div>

       
  );
  


export default MetricCard;
