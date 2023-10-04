import { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          margin: '20px',
          padding: '10px',
          border: '1px solid #000',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '10px'
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label="example"
      >
        <p
          style={{
            fontSize: '20px',
            fontWeight: 'bold'
          }}
          role="group"
          aria-roledescription="slide"
          aria-setsize={items.length}
          aria-posinset={activeIndex + 1}
        >
          {items[activeIndex]}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '20px',
            marginBottom: '1px0px'
          }}
        >
          <button
            style={{
              background: 'rgba(0, 0, 0, 0.9)',
              padding: '10px 30px',
              borderRadius: '5px'
            }}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            style={{
              background: 'rgba(0, 0, 0, 0.9)',
              padding: '10px 30px',
              borderRadius: '5px'
            }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
