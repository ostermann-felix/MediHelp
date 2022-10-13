import { getLessonById } from '../../src/services/lessonService';
import Image from 'next/image';
import styled from 'styled-components';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const lesson = await getLessonById(id);
  return {
    props: {
      lesson: lesson,
    },
  };
}

export default function LessonPage({ lesson }) {
  return (
    <>
      <h2>{lesson.name}</h2>
      {lesson.process.map((process, index) => {
        return (
          <>
            <h3 key={`${index} ${process.name}`}>{process.name}</h3>
            <p key={index}>{process.instruction}</p>
            {process.visual ? (
              <LessonVisual key={`${process.name} ${index}`}>
                <Image
                  alt="instruction visual"
                  src={process.visual}
                  width={350}
                  height={160}
                />
              </LessonVisual>
            ) : null}
          </>
        );
      })}
    </>
  );
}

const LessonVisual = styled.div`
  height: 20%;
`;
