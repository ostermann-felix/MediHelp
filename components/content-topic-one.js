import styled from 'styled-components';

export default function Headline() {
  return (
    <>
      <HeadLine>Contentheadline Topic 1</HeadLine>
    </>
  );
}

export function ContentTopicStepOne() {
  return (
    <>
      <Steps>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis.
      </Steps>
    </>
  );
}

export function ContentTopicStepTwo() {
  return (
    <>
      <Steps>
        <div>
          Bassa quis enim. Donec pede justo, fringilla vel, aliquet nec,
          vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt.
        </div>
      </Steps>
    </>
  );
}

const HeadLine = styled.h2`
  background-color: lightgray;
`;

const Steps = styled.a``;
