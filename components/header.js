import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <Headerbody>
        <AppHeadline>MediHelp</AppHeadline>
        <AbcdeLink>ABCDE</AbcdeLink>
      </Headerbody>
    </>
  );
}

const Headerbody = styled.header`
  background-color: #002d55;
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100vw;
`;

const AppHeadline = styled.h1`
  color: #ebf5ff;
`;

const AbcdeLink = styled.p`
  color: #ebf5ff;
`;
