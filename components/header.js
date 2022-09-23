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
  background-color: hotpink;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const AppHeadline = styled.p``;

const AbcdeLink = styled.p``;
