import styled from 'styled-components';

export default function Placeholderimg() {
  return (
    <>
      <ImgBackground>
        <PlaceholderText>Placeholder</PlaceholderText>
      </ImgBackground>
    </>
  );
}

const ImgBackground = styled.div`
  background-color: lightgray;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderText = styled.a`
  color: white;
`;
