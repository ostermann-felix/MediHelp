import HeadLine from '../../components/Structurecomponents';
import { SubHeadLineSchritt } from '../../components/Structurecomponents';
import {
  ContentTopicStepOne,
  ContentTopicStepTwo,
  ContentTopicStepThree,
  ContentTopicStepFour,
} from '../../components/Content-topic-two';

import Placeholderimg from '../../components/placeholderimg';

function content2() {
  return (
    <>
      <HeadLine HeadLineText="Reanimation" />
      <SubHeadLineSchritt SubHeadLineText="Schritt 1" />
      <ContentTopicStepOne />
      <Placeholderimg />
      <SubHeadLineSchritt SubHeadLineText="Schritt 2" />
      <ContentTopicStepTwo />
      <Placeholderimg />
      <SubHeadLineSchritt SubHeadLineText="Schritt 3" />
      <ContentTopicStepThree />
      <Placeholderimg />
      <SubHeadLineSchritt SubHeadLineText="Schritt 4" />
      <ContentTopicStepFour />
    </>
  );
}

export default content2;
