import { useState } from 'react';

export default function Home() {
  const [transform, setTransform] = useState(
    'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)'
  );

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = 20 * ((x - rect.width / 2) / rect.width);
    const rotateX = -20 * ((y - rect.height / 2) / rect.height);
    setTransform(`perspective(500px) scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  function handleLeave() {
    setTransform('perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)');
  }
  function handleDown() {
    setTransform('perspective(500px) scale(0.9) rotateX(0deg) rotateY(0deg)');
  }
  function handleUp() {
    setTransform('perspective(500px) scale(1.1) rotateX(0deg) rotateY(0deg)');
  }

  return (
    <body className="container">
      <div
        className="tilt"
        style={{ transform }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
      />
    </body>
  );
}
