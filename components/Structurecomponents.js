import styled from 'styled-components';

export default function HeadLine({ HeadLineText }) {
  return (
    <>
      <HeadLineTag> {HeadLineText} </HeadLineTag>
    </>
  );
}

export function SubHeadLineSchritt({ SubHeadLineText }) {
  return (
    <>
      <SubHeadLineTag> {SubHeadLineText} </SubHeadLineTag>
    </>
  );
}

const HeadLineTag = styled.h2`
  /* position: relative; */
  top: 3vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

const SubHeadLineTag = styled.h3`
  margin-bottom: 2vh;
`;
