import React from 'react';
import './FinancialReports.css';

const FinancialReports = ({ years, documents, onRetrieve }) => {
  return (
    <div className="financial-reports">
      <div className="form-group">
        <label htmlFor="yearSelect">Year</label>
        <select id="yearSelect" className="report-select">
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="docSelect">Document Type</label>
        <select id="docSelect" className="report-select">
          {documents.map((doc) => (
            <option key={doc} value={doc}>
              {doc}
            </option>
          ))}
        </select>
      </div>

      <button className="option-btn primary" onClick={onRetrieve}>
        Retrieve Report
      </button>
    </div>
  );
};

export default FinancialReports;
