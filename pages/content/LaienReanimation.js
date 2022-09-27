import Header from '../../components/Header';
import HeadLine from '../../components/Structurecomponents';
import { SubHeadLineSchritt } from '../../components/Structurecomponents';
import {
  ContentTopicStepOne,
  ContentTopicStepTwo,
  ContentTopicStepThree,
  ContentTopicStepFour,
} from '../../components/Content-topic-two';

import Placeholderimg from '../../components/placeholderimg';
import getAllLessons from '../../src/services/lessonService';

export async function getServerSideProps() {
  const lessons = await getAllLessons();
  console.log(lessons, 'get');

  return {
    props: {
      lessons: lessons,
    },
  };
}

function LaienReanimation({ lessons }) {
  return (
    <>
      <ul>
        {lessons?.map((lesson) => (
          <li>
            <p>{lesson.name}</p>
          </li>
        ))}
      </ul>

      <div>
        <Header />
      </div>
      <div>
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
      </div>
    </>
  );
}

export default LaienReanimation;
