import Link from 'next/link';
import getAllLessons from '../src/services/lessonService';

export async function getServerSideProps() {
  const lessons = await getAllLessons();
  return {
    props: {
      lessons: lessons,
    },
  };
}

function Categorie({ lessons }) {
  return (
    <>
      <div>
        {lessons.map((lesson) => (
          <p key={lesson.id}>
            <Link href={`/lessons/${lesson.id}`}>
              <a>{lesson.name}</a>
            </Link>
          </p>
        ))}
      </div>
    </>
  );
}

export default Categorie;
