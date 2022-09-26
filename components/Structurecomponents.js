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

const SubHeadLineTag = styled.h3`
  margin-bottom: 2vh;
`;

const HeadLineTag = styled.h2`
  margin-bottom: 2vh;
`;
