import styled from 'styled-components';

export default function Footer() {
  return (
    <>
      <Footerbody>
        <Backward />
        <Forward />
      </Footerbody>
    </>
  );
}

const Footerbody = styled.footer`
  background-color: #002d55;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
`;

const Backward = styled.div`
  background-image: url(../Assets/Backward.ico);
`;

const Forward = styled.div`
  background-image: url(../Assets/Forward.ico);
`;
