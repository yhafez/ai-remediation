import { useState } from 'react';

const AccordionAriaExpanded = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        border: '1px solid #000',
        borderRadius: '5px',
        width: '100%'
      }}
      onClick={handleToggle}
      aria-expanded={isExpanded}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'rgba(0, 0, 0, 0.4)',
          padding: '10px 30px'
        }}
      >
        <h3>Accordion Header</h3>
        <button aria-label="Expand accordion">
          <span
            style={{
              display: 'inline-block',
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderLeft: '10px solid',
              transform: isExpanded ? 'rotate(90deg)' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
        </button>
      </div>
      {isExpanded && (
        <div
          style={{
            padding: '10px 30px',
            background: 'rgba(0, 0, 0, 0.1)'
          }}
        >
          Accordion content
        </div>
      )}
    </div>
  );
};

export default AccordionAriaExpanded;
