import React, { useState } from 'react';
import { cn } from '../../lib/utils';

const HighlightBox = ({ color = 'var(--celadon-green)', className, children }) => {
  const [gradientAngle, setGradientAngle] = useState(); // Initial angle set to 45 degrees
  const [isGradientVisible, setIsGradientVisible] = useState(false); // Gradient initially hidden

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    // Calculate the center of the element
    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    // Calculate the difference between cursor position and center
    const dx = offsetX - centerX;
    const dy = offsetY - centerY;

    // Calculate the angle in radians and convert to degrees
    let angle = (Math.atan2(dy, dx) * (180 / Math.PI)) - 90;

    // Adjust angle to be in the range of 0 to 360 degrees
    if (angle < 0) {
      angle += 360;
    }

    // Set the gradient angle and make it visible
    setGradientAngle(angle);
    setIsGradientVisible(true);
  };

  const handleMouseLeave = () => {
    // Hide the gradient when the mouse leaves the element
    setIsGradientVisible(false);
  };

  const gradientStyle = isGradientVisible
    ? `linear-gradient(${gradientAngle}deg, ${color}, transparent 50%)`
    : 'none'; // No background when gradient is not visible

  return (
    <div
      style={{
        background: gradientStyle,
        transition: 'all 200ms ease-in-out',
      }}
      className={cn("p-[2px]", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default HighlightBox;
