import Placeholderimg from '../components/Placeholderimg';
import CategoryGrid from '../components/CategoryGrid';
import getAllLessons from '../src/services/lessonService';

export async function getServerSideProps() {
  const lessons = await getAllLessons();
  return {
    props: {
      lessons: lessons,
    },
  };
}

export default function Home({ lessons }) {
  return (
    <>
      <Placeholderimg />
      <CategoryGrid lessons={lessons} />
    </>
  );
}
