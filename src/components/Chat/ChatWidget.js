import React, { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = ({ onSendMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div>
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-comments"></i>
      </button>
      {isOpen && (
        <div className="chat-widget-container">
          <div className="chat-widget-header">
            <h3>AI Financial Advisor</h3>
            <button onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <div className="chat-messages"></div>
          <div className="chat-input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about financial analysis..."
            />
            <button onClick={() => onSendMessage(message)}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;


