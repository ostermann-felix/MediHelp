import HeadLine from '../../components/Structurecomponents';
import { SubHeadLineSchritt } from '../../components/Structurecomponents';
import {
  ContentTopicStepOne,
  ContentTopicStepTwo,
  ContentTopicStepThree,
  ContentTopicStepFour,
  ContentTopicStepFive,
} from '../../components/content-topic-one';

import Placeholderimg from '../../components/placeholderimg';

function stabileSeitenlage() {
  return (
    <>
      <HeadLine HeadLineText="Stabile Seitenlage" />
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
      <Placeholderimg />
      <SubHeadLineSchritt SubHeadLineText="Schritt 5" />
      <ContentTopicStepFive />
    </>
  );
}

export default stabileSeitenlage;
