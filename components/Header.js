import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import staroflife from '../Assets/Icons/star_of_life.svg';

export default function Header() {
  return (
    <>
      <Headerbody>
        <Link href="/">
          <Image
            src={staroflife}
            alt="App Logo"
            width={50}
            height={50}
            layout="fixed"
          />
        </Link>
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
  align-items: center;
  position: fixed;
  height: 12%;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const AppHeadline = styled.h1`
  color: #ebf5ff;
`;

const AbcdeLink = styled.p`
  color: #ebf5ff;
`;
