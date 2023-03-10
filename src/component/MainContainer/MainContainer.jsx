/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import BackgroundImage from '../BackgroundImage/svg/BackgroundImage';
import Promotions from '../Promotions/Promotions';
import pointerContainerStyle from './MainContainer.style';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Pointer from '../Pointer/Pointer';
import Contact from '../Contact/Contact';
import Timeline from '../Timeline/Timeline';
import Footer from '../Footer/Footer';

export default function MainContainer({ color }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = e => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <main css={pointerContainerStyle} onPointerMove={handleMouseMove}>
      <Header />
      <BackgroundImage color={color} />
      <Promotions color={color} />
      <Timeline color={color} />
      <Button title="지원하기" link="/Apply" color={color} />
      <Contact />
      <Footer />
      <Pointer position={position} size={7} color={color} />
    </main>
  );
}
