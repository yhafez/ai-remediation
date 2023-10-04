const AccordionAriaExpanded = () => {
  return (
    <div
      style={{
        border: '1px solid #000',
        borderRadius: '5px',
        width: '100%'
      }}
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
        <button aria-label="Expand accordion" disabled>
          <span
            style={{
              display: 'inline-block',
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderLeft: '10px solid',
              transform: 'rotate(90deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </button>
      </div>
      <div
        style={{
          padding: '10px 30px',
          background: 'rgba(0, 0, 0, 0.1)'
        }}
      >
        <p aria-expanded="true">Accordion content</p>
      </div>
    </div>
  );
};

export default AccordionAriaExpanded;
