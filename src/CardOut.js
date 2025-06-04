import React from 'react';

export default function Modal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        width: '80%',
        maxWidth: '600px',
        textAlign: 'center',
        color: 'black',
      }}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose} style={{
          marginTop: '20px',
          padding: '10px 20px',
          border: 'none',
          backgroundColor: '#333',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
          Close
        </button>
      </div>
    </div>
  );
}
