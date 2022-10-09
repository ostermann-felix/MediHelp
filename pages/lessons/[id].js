import { getLessonById } from '../../src/services/lessonService';
import Image from 'next/image';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const lesson = await getLessonById(id);
  return {
    props: {
      lesson: lesson,
    },
  };
}

export default function lessonPage({ lesson }) {
  return (
    <>
      <h2>{lesson.name}</h2>
      {lesson.process.map((process, index) => {
        console.log(process.visual);
        return (
          <>
            <h3 key={`${index} ${process.name}`}>{process.name}</h3>
            <p key={index}>{process.instruction}</p>
            <Image
              key={`${process.name} ${index}`}
              alt="instruction visual"
              src={process.visual}
              width={100}
              height={100}
            />
          </>
        );
      })}
    </>
  );
}
