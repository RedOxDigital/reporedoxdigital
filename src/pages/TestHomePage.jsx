import React, { useEffect, useState } from 'react'

const TestHomePage = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const openPanel = () => {
    setIsPanelOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closePanel = () => {
    setIsPanelOpen(false)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    console.log('TestHomePage mounted')
    
    // Cleanup
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', background: '#1a1a1a', color: 'white' }}>
      <h1>Test Home Page</h1>
      <p>This is a simplified test version to check if the basic structure works.</p>
      
      <button 
        onClick={openPanel}
        style={{
          padding: '1rem 2rem',
          background: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Open Panel
      </button>

      {/* Panel Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          display: isPanelOpen ? 'block' : 'none',
          zIndex: 999
        }}
        onClick={closePanel}
      />

      {/* Side Panel */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '400px',
          height: '100vh',
          background: '#2a2a2a',
          transform: isPanelOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          zIndex: 1000,
          padding: '2rem'
        }}
      >
        <button 
          onClick={closePanel}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.5rem'
          }}
        >
          ×
        </button>
        
        <h2>Contact Form</h2>
        <p>Phone: (555) 123-4567</p>
        
        <form style={{ marginTop: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name *</label>
            <input 
              type="text" 
              required 
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#3a3a3a',
                border: '1px solid #555',
                borderRadius: '4px',
                color: 'white'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email *</label>
            <input 
              type="email" 
              required 
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#3a3a3a',
                border: '1px solid #555',
                borderRadius: '4px',
                color: 'white'
              }}
            />
          </div>
          
          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default TestHomePage
