import { useState, useEffect } from 'react';

// ==== Slider Dots Component
const DotIcon = ({ selected }) => {
  const activeColor = "rgba(124, 58, 237, 1)";
  const inactiveColor = "rgba(196, 181, 253, 1)";
  const fillColor = selected ? activeColor : inactiveColor;

  return (
    <svg 
      className="mx-3" 
      width="20px" 
      aria-hidden="true" 
      focusable="false" 
      data-prefix="fas" 
      data-icon="circle" 
      role="button" 
      xmlns="https://www.w3.org/2000/svg" 
      viewBox="0 0 512 512"
      >
        <path 
          fill={fillColor} 
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" 
        />
    </svg>
  );
}

// ==== Slider Items Component
const SliderItem = ({ children, id, selectedKey }) => {
  
  const show = (id === selectedKey);

  return (
    <div className={`carousel-item ${show ? 'active' : ''}`}>
      {children}
    </div>
  );
}

// ==== Slider Container Component
const Slider = ({ children, time }) => {
  const [index, setIndex] = useState(0);
  const keys = children.map((child, idx) => idx);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % keys.length;
      setIndex(newIndex);
    }, time);

    return () => clearInterval(interval);
  });

  // Handle Dots functionality
  const _sliderDots = () => {
    return keys.map(key => (
      <span key={key} onClick={() => setIndex(key)}>
        {<DotIcon selected={key === index} />}
      </span>
    ));
  }

  // Handle slider Items
  const _sliderItems = () => {
    return children.map((child, idx) => (
      <SliderItem key={idx} id={idx} selectedKey={index}>
        {child}
      </SliderItem>
    ));
  }
  
  return (
    <div className="carousel">
      <div className="carousel-inner">
        { _sliderItems() }
      </div>
      <div className="text-center my-2">
          { _sliderDots() }
      </div>
    </div>
  );
}

export default Slider;