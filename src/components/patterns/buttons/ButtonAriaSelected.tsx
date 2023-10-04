import { useState } from 'react';

const ButtonAriaSelected = () => {
  const [pressed, setPressed] = useState(false);

  const handleToggle = () => {
    setPressed(!pressed);
  };

  return (
    <div>
      <button
        style={{
          background: pressed ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.4)',
          padding: '10px 30px',
          borderRadius: '5px'
        }}
        onClick={handleToggle}
        aria-selected={pressed}
      >
        {pressed ? 'Pressed' : 'Not Pressed'}
      </button>
    </div>
  );
};

export default ButtonAriaSelected;
