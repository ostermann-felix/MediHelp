import styled from 'styled-components';
import Image from 'next/image';
import Littleparamedic from '../Assets/Icons/little_paramedic.svg';

export default function Placeholderimg() {
  return (
    <>
      <ImgBackground>
        <Little_paramedic>
          <Image
            src={Littleparamedic}
            alt="App Logo"
            width={180}
            height={180}
            layout="fixed"
          />
        </Little_paramedic>
      </ImgBackground>
    </>
  );
}

const ImgBackground = styled.div`
  border: solid black 2px;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(227, 228, 228, 1) 48%,
    rgba(227, 227, 227, 1) 100%
  );
`;

const Little_paramedic = styled.div``;
