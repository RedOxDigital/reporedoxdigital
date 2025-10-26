import React from 'react'

const FloatingActionButton = ({ show, onClick }) => {
  return (
    <button 
      className={`fab ${show ? 'show' : ''}`} 
      onClick={onClick}
      aria-label="Open contact form"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8"/>
        <path d="M8 14h4"/>
      </svg>
    </button>
  )
}

export default FloatingActionButton

