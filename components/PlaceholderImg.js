import styled from 'styled-components';
import Image from 'next/image';
import Littleparamedic from '../Assets/Icons/little_paramedic.svg';

export default function PlaceholderImg() {
  return (
    <>
      <ImgBackground>
        <Image
          src={Littleparamedic}
          alt="App Logo"
          width={180}
          height={180}
          layout="fixed"
        />
      </ImgBackground>
    </>
  );
}

const ImgBackground = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
