import Image from 'next/image';
import styled from 'styled-components';

export default function Footer() {
  return (
    <>
      <Footerbody></Footerbody>
    </>
  );
}

const Footerbody = styled.footer`
  background-color: #002d55;
  display: flex;
  height: 12%;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 2%;
`;

const Backward = styled(Image)``;

const Forward = styled(Image)``;
